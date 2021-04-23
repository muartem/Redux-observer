import {Autocomplete} from "@material-ui/lab";
import {Button, TextField} from "@material-ui/core"
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import styled from 'styled-components'
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import {fromEvent} from "rxjs";
import {debounceTime, pluck, tap, filter, distinctUntilChanged, switchMap, catchError} from "rxjs/operators";
import {ajax} from "rxjs/ajax";


const Search = () => {
     const initOptions = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
    ]
    const [options] = useState(initOptions);
    const searchResult = useSelector((state) => state.search.data)

    const Div = styled.div`
      padding: 25px;
      display: flex;
      flex-direction: row;
      gap: 15px;
    `

    const ref = useRef();

    let tg
    setTimeout(()=>{
        tg = document.querySelector('#combo-box-demo')



   const thread$ = fromEvent(tg, 'input')
        .pipe(
            debounceTime(500),
            pluck('target', 'value'),
            filter(v => v.length > 2),
            distinctUntilChanged(),
            switchMap((searchParam) => (
                ajax(`https://jsonplaceholder.typicode.com/posts?userId=1`).pipe(
                    catchError(err => console.log(err)),
                    pluck('response')
                )
            ))
        ).subscribe(v => console.log(v))

    },0)

    const inputHandler = (e) => {
    }

    return (
        <Div>
            <Autocomplete
                id="combo-box-demo"
                options={options}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} ref={ref} id="it" onInput={inputHandler} label="Combo box" variant="outlined" />}
            />
            <Button
                variant="contained"
                color="primary"
                endIcon={<ArtTrackIcon />}
            >
                Go
            </Button>
        </Div>
    );
}

export default Search;
