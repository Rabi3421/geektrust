export const allfilter = (data, filterObj) => {
  let filteringdata = [];

  console.log("filter:", filterObj.getAll("color"));
  let color = filterObj.getAll("color");
  let gender = filterObj.getAll("gender");
  let price = filterObj.getAll("price");
  console.log("rabi",price);
  let type = filterObj.getAll("type");

  //color filter
  if (color.length) {
    for (let i = 0; i < color.length; i++) {
      let fdata = data.filter((el) => color[i] == el.color);
      filteringdata = [...filteringdata, ...fdata];
    }
  }

  //gender filter
  if (gender.length) {
    let gData = filteringdata.filter((el) => gender == el.gender);
    filteringdata = [...gData];
    console.log("gender:", filteringdata);
  }

  // price filter
  if (price?.length) {
    let min = 0;
    let max = 0;
    if (price !== null) [min, max] = price[0]?.split("-");
    console.log(min,max);
    let pData = filteringdata?.filter((el) => el.price > min && el.price <= max );
    filteringdata = [...pData];
  }

  //type filter
  if (type.length) {
    let tData = filteringdata.filter((el) => type == el.type);
    filteringdata = [...tData];
  }
  console.log("type:", filteringdata);
  return filteringdata.length > 0? filteringdata:"No Data Found" ;
};
