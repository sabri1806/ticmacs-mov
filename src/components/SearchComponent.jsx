import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import styled from 'styled-components';

const Search = styled.input`
    border: 2px solid;
    border-radius: 5px;
    margin-bottom: 16px;
    padding: 8px;
    font-size: 14px;
    &:focus{
        box-shadow: 0px 0px 8px blue;
    }
`;

const SearchComponent = ({onChange, keyword}) => {

    return(
        <Search type="text" placeholder='Type movie name' value={keyword} onChange={(e)=>onChange(e.target.value)}/>
    )
};

export default SearchComponent;