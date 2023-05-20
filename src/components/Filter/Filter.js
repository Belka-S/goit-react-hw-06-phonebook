import PropTypes from 'prop-types';
import { Label, Button } from './Filter.styled';

export const Filter = ({ handleSearch, filterValue }) => (
  <>
    <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleSearch}
      />
    </Label>
    <Button onClick={handleSearch}>New search</Button>
  </>
);

Filter.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
