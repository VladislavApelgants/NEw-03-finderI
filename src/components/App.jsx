import { Component } from "react"
import SearchBar from "./SearchBar"
import { fetchImage } from "api/fetchPicture"
import ImageGallery from "./GalleryImage/ImageGallery"
import Button from "./Button"



export class App extends Component {

  state = {
    queryValue: '',
    dataImage: [],
    page: 1,
    status: false
  }

  async componentDidUpdate(nextProps, nextState) {
   
    const { queryValue, page, status } = this.state
    
    try {
      if (status) {
        const response = await fetchImage(queryValue, page)
        this.setState(prevState => {
          return {
            dataImage: [...prevState.dataImage, ...response.hits],
            status: false
          }
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  onSubmitForm = ({search}) => {
    this.setState({queryValue: search, status: true, page:1, dataImage: []})
  }

  onLoadMore = () => {
  this.setState(prevState => ({page: prevState.page + 1, status: true}))
  }
  
  render() {
    const { onSubmitForm, onLoadMore } = this
    const {dataImage} = this.state
    
    return (
      <>
      <SearchBar onSubmit={onSubmitForm} />
        {dataImage.length !== 0 && <ImageGallery dataImage={dataImage} />}
        {dataImage.length !== 0 && <Button onLoadMore={ onLoadMore} />}
      </>
    )
  }
}
