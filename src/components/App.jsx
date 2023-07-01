import { Component } from "react"
import SearchBar from "./SearchBar"
import { fetchImage } from "api/fetchPicture"
import ImageGallery from "./GalleryImage/ImageGallery"
import Button from "./Button"



export class App extends Component {

  state = {
    queryValue: '',
    dataImage: [],
    page: 1
  }

  async componentDidUpdate(nextProps, nextState) {
    const { queryValue, page } = this.state
    
    try {
      if (queryValue !== nextState.queryValue) {
        this.setState({page: 1})
      }
      
      if (queryValue !== nextState.queryValue || page !== nextState.page) {
        const response = await fetchImage(queryValue, page)

        this.setState((prevState) => ({dataImage: [...prevState.dataImage, ...response.hits]}))
    }
    } catch (error) {
      console.log(error);
    }
  }

  onSubmitForm = ({search}) => {
    this.setState({queryValue: search})
  }

  onLoadMore = () => {
  this.setState(prevState => ({page: prevState.page + 1}))
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
