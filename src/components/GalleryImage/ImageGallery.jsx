import ImageGalleryItem from "./ImageGalleryItem"

export default function ImageGallery({ dataImage }) {
    return <ul className="gallery">
        <ImageGalleryItem dataImage={dataImage}/>
        </ul>
}