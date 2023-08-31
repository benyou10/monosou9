import { useState } from 'react'
import HeroSection from './heroSection'
import Ads from './ads'
import ToolSpace from './toolSpace'
import Dashboard from './productsPage'
import SubMenu from './subMenu'
import { Outlet } from 'react-router-dom'
import Footer from './footer'


function DefaultLaout() {

  return (
    <>
<SubMenu />

<ToolSpace />

<Outlet />

<Footer />
    </>
  )
}

export default DefaultLaout