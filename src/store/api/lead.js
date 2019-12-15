import {store} from '../store'

function fetchLead() {
    let url = `https://randomuser.me/api/`;
    fetch(url)
        .then((data) => data.json())
        .then(response => {
            console.log("lead: ", response.results[0]);
            store.dispatch({
                type: "LEAD_LOADED",
                lead: response.results[0]
            })
        })
}

export {fetchLead};