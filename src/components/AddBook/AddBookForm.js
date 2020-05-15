import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { Form, Formik } from "formik";
import { categories, ratings } from "../../constants";
const AddBookForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          author: "",
          category: "",
          rating: "",
          imageUrl: "",
          description: "",
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="name of the book"
              />
            </FormGroup>
            <FormGroup>
              <Label for="author">Author</Label>
              <Input
                type="text"
                name="author"
                id="author"
                placeholder="Author of the book"
              />
            </FormGroup>
            <FormGroup>
              <Label for="imageUrl">Image URL</Label>
              <Input
                type="text"
                name="imageUrl"
                id="imageUrl"
                placeholder="Image of the book"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Category</Label>
              <Input type="select" name="category" id="category">
                {categories.map((category) => {
                  return <option>{category}</option>;
                })}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="textarea" name="description" id="description" />
            </FormGroup>
            <FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Rating</Label>
                <Input type="select" name="rating" id="rating">
                  {ratings.map((category) => {
                    return <option>{category}</option>;
                  })}
                </Input>
              </FormGroup>
            </FormGroup>
            <Button color="primary">Add book</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddBookForm;
