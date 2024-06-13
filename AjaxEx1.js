const parser = new DOMParser()
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const xmlDOM = parser.parseFromString(xmlString, "text/xml")
// const listNode = xmlDOM.querySelector("list")
const studentNode = xmlDOM.getElementsByTagName("student")
const result = {
    list: []
}

for (let stud of studentNode){
    const nameNode = stud.querySelector("name")
    const firstNameNode = nameNode.querySelector("first").textContent
    const secondNameNode = nameNode.querySelector("second").textContent
    const ageNode = stud.querySelector("age").textContent
    const profNode = stud.querySelector("prof").textContent
    const langAttr = nameNode.getAttribute("lang")


result.list.push({
    name:  `${firstNameNode} +  ${secondNameNode}`,
    age: Number(ageNode),
    prof: profNode,
    lang: langAttr

})

}

console.log(result)