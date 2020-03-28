import React from "react";
import {
  Title,
  SubTitle,
  ImageHeader,
  Header,
  HeaderText,
  BackgoundText,
  Text
} from "./styles";

export default ({ onSubmitForm, handlerInput }) => (
  <Header>
    <div>
      <ImageHeader
        src="https://www.runnymedehotel.com/wp-content/uploads/2019/12/Fizz-and-Films_popcorn-1200x800.jpg"
        alt="..."
      />
      <HeaderText>
        <BackgoundText>
          <Title class="card-title">Welcome to OMDB!</Title>
          <SubTitle class="lead">The Open Movie Database.</SubTitle>
          <br />
          <div className="col-md-6 mx-auto">
            <form onSubmit={onSubmitForm}>
              <input
                type="text"
                className="form-control"
                placeholder="What movie are you looking for?"
                onChange={handlerInput}
              />
            </form>
          </div>
        </BackgoundText>
      </HeaderText>
    </div>
  </Header>
);
