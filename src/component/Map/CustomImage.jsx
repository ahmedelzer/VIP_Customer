export const CustomImage = ({ img, upperImage }) => {
  return (
    <div style={{ position: "relative", width: "50px", height: "50px" }}>
      {/* Overlay image (optional) */}
      {upperImage && (
        <img
          src={upperImage}
          alt="Upper Layer"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            opacity: 0.5, // Adjust opacity as needed
          }}
        />
      )}
      {/* Base image */}
      <img
        src={img}
        alt="Base Layer"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%", // Makes the image circular
          zIndex: 0,
        }}
      />
    </div>
  );
};
