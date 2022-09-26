const React = require('react');
const DefaultLayout = require('../components/Default');
const ListItem = require('../components/ListItem');

const Index = (props) => {
  return (
    <DefaultLayout title={"Veggie Index Page"}>
      <div>
        <h1> Index Route </h1>
        <a href="/veggies/new">Create a New Veggie!</a>
        <ul>
          {
            props.veggies.map((veggie, index) => {
              return (
                <ListItem key={index} veggie={veggie} />
              )
            })
          }
        </ul>
      </div>
    </DefaultLayout>
  )
}

module.exports = Index;