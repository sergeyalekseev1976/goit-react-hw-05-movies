import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { FormWrap, Input, FormBtn } from './SearchBox.styled';

export const SearchBox = ({ updateQueryString }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    updateQueryString(form.elements.query.value);
    form.reset();
  };

  return (
    <FormWrap onSubmit={handleSubmit}>
      <Input type="text" name="query" placeholder="Search movie" />
      <FormBtn type="submit">
        <BsSearch size="1.5em" />
      </FormBtn>
    </FormWrap>
  );
};

SearchBox.propTypes = {
  updateQueryString: PropTypes.func.isRequired,
};
