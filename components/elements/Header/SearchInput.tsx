import { $mode } from "@/context/mode"
import { controlStyles, inputStyles, menuStyles, optionStyles } from "@/styles/searchInput"
import { SelectOptionType } from "@/types/common"
import { useStore } from "effector-react"
import { useState } from "react"
import ReactSelect from "react-select"

const SearchInput = () => {
  const mode = useStore($mode)
  const [searchOption, setSearchOption] = useState<SelectOptionType>(null)

  const handleSearchOptionChange = (selectedOption: SelectOptionType) => {
    setSearchOption(searchOption)
  }

  return (
    <ReactSelect 
      placeholder="я ищу.." 
      value={searchOption} 
      onChange={handleSearchOptionChange}
      styles={{
        ...inputStyles,
        control: (defaultStyles) => ({
          ...controlStyles(defaultStyles, mode),
          backgroundColor: mode === 'dark' ? '#2d2d2d' : '#ffffff',
        }),
        input: (defaultStyles) => ({
          ...defaultStyles,
          color: mode === 'dark' ? '#f2f2f2' : '#222222',
        }),
        menu: (defaultStyles) => ({
          ...menuStyles(defaultStyles, mode),
        }),
        option: (defaultStyles, state) => ({
          ...optionStyles(defaultStyles, state, mode),
        }),
      }}
      isClearable={true}
      openMenuOnClick={false}
      options={[1, 5, 6, 7, 8, 10, 12, 14, 15, 16].map((item) => ({
        value: item, 
        label: item
       }))}
    />
  )
}

export default SearchInput
