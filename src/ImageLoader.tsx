import Image from "./Image";

export default function ImageLoader(images: any) {
  const result = images;
  let final;
  if (result.data.length > 0) {
    final = result.data.map((image: any) => {
      return (
        <Image
          url={image.urls.regular}
          title={image.alt_description}
          raw={image.urls.raw}
        />
      );
    });
  } else {
    return (
      <div>
        <img
          className="baseimage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
        />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 50 }}>{final}</div>
  );
}
