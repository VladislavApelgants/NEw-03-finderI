export default function ImageGalleryItem({ dataImage }) {
    return dataImage.map(el => <li key={el.id}>      
            <img src={el.webformatURL} alt={el.tags} />
    </li>)
}