const ImageClipBox = ({ src, clipClass, alt }) => {
  return (
    <div className={clipClass}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default ImageClipBox
