import { Component } from "react";
import { Field, Form, Formik, ErrorMessage  } from 'formik';

export default class SearchBar extends Component {
    

    render() {
        const { onSubmit } = this.props
       

        return (
            <header className="searchbar">
                <Formik
                    initialValues={{ search: '' }}
                    onSubmit={onSubmit}>
                    <Form className="form">
                        <button type="submit" className="button">
                            <span className="button-label">Search</span>
                        </button>

                        <Field
                            className="input"
                            type="text"
                            name='search'
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                        />
                        <ErrorMessage name="search" component="div" />
                    </Form>
                
                
                </Formik>
            </header>
        )
    }
}