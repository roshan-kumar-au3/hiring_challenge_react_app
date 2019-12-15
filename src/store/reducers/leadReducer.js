// this file is a reducer to get the lead
import {
    fetchLead,
} from '../api/lead';

function leadReducer(leads = [], action) {
    if (action.type === "FETCH_LEAD") {
            fetchLead();
    }

    if (action.type === "LEAD_LOADED") {
        let newleads = [...leads];
        let leadObj = {...action.lead};
        leadObj.converted = false;

        console.log("leadOject: ", leadObj);

        console.log("inside lead loaded action",action.lead);
        newleads.push(leadObj);
        leads = newleads;
    }

    if (action.type === "LEAD_CONVERTED") {
        let newleads = [...leads];
        let leadObj;
        let leadId = action.id;
        console.log(leadId);
        for (const lead of newleads) {
            if(lead.email === action.id){
                leadObj = lead;
            }
        }
        leadObj.converted = !(leadObj.converted);
        newleads = [...leads]
        console.log(leadObj);
        leads = newleads
    }

    // if (action.type === "LEAD_CONVERTED_COUNT") {
    //     let newleads = [...leads];
    //     let count = 0;
    //      for (const lead of newleads) {
    //          if (lead.converted) {
    //             count++;
    //          }
    //      }
    //      return
    // }

    return leads
}

export default leadReducer;