type ImageKitAuth = {
  token: string;
  expire: number;
  signature: string;
  publicKey: string;
};

export async function uploadImage(imageUri: string, auth: ImageKitAuth) {
  const fileName = imageUri.split("/").pop() || "pantry-image.jpg";

  const extension = fileName.split(".").pop()?.toLowerCase();

  const mimeType =
    extension === "png"
      ? "image/png"
      : extension === "webp"
        ? "image/webp"
        : "image/jpeg";

  try {
    // Convert the local image into a Blob
    const imageResponse = await fetch(imageUri);
    const imageBlob = await imageResponse.blob();

    const formData = new FormData();

    formData.append("file", imageBlob, fileName);
    formData.append("fileName", fileName);
    formData.append("folder", "/pantry");
    formData.append("publicKey", auth.publicKey);
    formData.append("token", auth.token);
    formData.append("signature", auth.signature);
    formData.append("expire", String(auth.expire));
    formData.append("useUniqueFileName", "true");

    const response = await fetch(
      "https://upload.imagekit.io/api/v1/files/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    const responseText = await response.text();

    // console.log("IMAGEKIT STATUS:", response.status);
    // console.log("IMAGEKIT RESPONSE:", responseText);

    if (!response.ok) {
      throw new Error(responseText);
    }

    const result = JSON.parse(responseText);

    return result.url as string;
  } catch (error) {
    // console.log("IMAGEKIT UPLOAD ERROR:", error);
    throw error;
  }
}
