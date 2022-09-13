import { useContext } from 'react'
import {ThemeContext} from '../context'

//This hook is to use the theme context, and call all params of the context

export const useTheme = () => useContext(ThemeContext)