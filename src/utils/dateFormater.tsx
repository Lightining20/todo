import moment from "moment"

export const dateFormater=(date:Date,formate:string)=>{
    return moment(date).format(formate)
  }