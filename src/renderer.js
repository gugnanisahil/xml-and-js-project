const controller = require("./Controller/api.js")

const loadData = (path) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });

const renderTable = (data, nameTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  let source = data;

  if (nameTerm) {
    source = source.filter(
                          filter  =>  filter.country === nameTerm 
                          || filter.type === nameTerm
                          || filter.city === nameTerm
                          || filter.full_name === nameTerm
                          || filter.email === nameTerm
    );
  }

  const rows = source.reduce(
    (acc, { id , full_name, email, credit, type, city, country }) =>
      acc +
      `<tr currency="table-row-${id}"><td>${id}</td><td>${full_name}</td><td>${email}</td><td>${credit}</td><td>${type}</td><td>${city}</td><td>${country}</td></tr>`,
    ``
  );``

  tableBody.innerHTML = rows;
};

controller.getAll().then(({data}) => renderTable(data));

let form = document.querySelector("#form");
  form.onsubmit = (event) => {
  event.preventDefault();
  
  const term = event.target.inputfield.value;

  controller.getAll().then(({data}) => renderTable(data, term));
  
};

form.onreset = () => {
  controller.getAll().then(({data}) => renderTable(data));
};