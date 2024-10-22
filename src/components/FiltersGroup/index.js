import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    searchInput,
    activeCategoryId,
    activeRatingId,
    categoryOptions,
    ratingsList,
    updateSearchInput,
    updateCategory,
    updateRating,
    clearFilters,
  } = props

  const onChangeSearchInput = event => {
    updateSearchInput(event.target.value, false)
  }

  const onPressingEnter = event => {
    if (event.key === 'Enter' && searchInput !== '') {
      updateSearchInput(searchInput, true)
    }
  }

  const onClickClearFilters = () => {
    clearFilters()
  }

  const renderCategoryItem = categoryDetails => {
    const {name, categoryId} = categoryDetails

    const categoryClassName =
      activeCategoryId === categoryId ? 'category-name active' : 'category-name'

    const onClickCategoryItem = () => {
      updateCategory(categoryId)
    }

    return (
      <li className="category-item" key={categoryId}>
        <p className={categoryClassName} onClick={onClickCategoryItem}>
          {name}
        </p>
      </li>
    )
  }

  const renderRatingsItem = itemDetails => {
    const {ratingId, imageUrl} = itemDetails

    const ratingBtnClassName =
      activeRatingId === ratingId ? 'rating-name active' : 'rating-name'

    const onClickRatingItem = () => {
      updateRating(ratingId)
    }

    return (
      <li className="ratings-item" onClick={onClickRatingItem} key={ratingId}>
        <img
          className="ratings-img"
          src={imageUrl}
          alt={`rating ${ratingId}`}
        />
        <p className={ratingBtnClassName}>& up</p>
      </li>
    )
  }

  return (
    <div className="filters-group-container">
      <div className="search-field-container">
        <input
          className="search-field"
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onPressingEnter}
        />
        <BsSearch className="search-icon" />
      </div>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list-container">
        {categoryOptions.map(eachCategory => renderCategoryItem(eachCategory))}
      </ul>
      <h1 className="ratings-heading">Rating</h1>
      <ul className="ratings-list-container">
        {ratingsList.map(each => renderRatingsItem(each))}
      </ul>
      <button
        type="button"
        className="clear-filters-btn"
        onClick={onClickClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
