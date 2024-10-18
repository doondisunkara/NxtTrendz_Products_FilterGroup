import {FaStar, FaRegStar} from 'react-icons/fa'
import './index.css'

const FiltersGroup = props => {
  const {categoryOptions} = props

  const onClickCategoryItem = event => {
    console.log(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <input type="search" />
      <h1 className="category-heading">Category</h1>
      <ul className="categories-container">
        {categoryOptions.map(eachOption => (
          <li className="category-item" key={eachOption.categoryId}>
            <button
              type="submit"
              className="category-btn"
              value={eachOption.categoryId}
              onClick={onClickCategoryItem}
            >
              {eachOption.name}
            </button>
          </li>
        ))}
      </ul>
      <h1>Rating</h1>
      <FaStar className="colored-star" />
      <FaRegStar className="white-star" />
    </div>
  )
}

export default FiltersGroup
