const React = require('react');
const DefaultLayout = require('../components/Default');

const Edit = ({ veggie }) => {
  return(
    <DefaultLayout title="Edit Page">

      <form action={`/veggie/${veggie._id}?_method=PUT`} method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" defaultValue={veggie.name} /> <br/>
        <label htmlFor="color">Color:</label>
        <input type="text" name="color" defaultValue={veggie.color} /> <br/>
        <label htmlFor="readyToEat">Is Ready To Eat:</label>
        {
          veggie.readyToEat ?
            <input type="checkbox" name="readyToEat" defaultChecked />
            : <input type="checkbox" name="readyToEat" />
          }
          <br />
        <input type="submit" value="Submit Changes!" />
      </form>

    </DefaultLayout>
  )
}

module.exports = Edit;