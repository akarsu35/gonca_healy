import React, { useEffect, useState } from 'react'

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  useSelect,
} from '@material-tailwind/react'
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'

const navListMenuItems = [
  {
    title: 'HEALY GOLD EDİTİON',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
  },
  {
    title: 'HEALY HOLİSTİC EDİTİON',
    description: 'Meet and learn about our dedication',
    icon: UserGroupIcon,
  },
  {
    title: 'HEALY RESONANCE EDİTİON',
    description: 'Find the perfect solution for your needs.',
    icon: Bars4Icon,
  },
  {
    title: 'HEALY RESONANCE PLUS EDİTİON',
    description: 'Learn how we can help you achieve your goals.',
    icon: SunIcon,
  },
  {
    title: 'HEALY PROFESSİONAL EDİTİON',
    description: 'Reach out to us for assistance or inquiries',
    icon: GlobeAmericasIcon,
  },
  {
    title: 'MAGHEALY CLASSİC EDİTİON',
    description: 'Find the perfect solution for your needs.',
    icon: PhoneIcon,
  },
  {
    title: 'MAGHEALY PROFESSİONAL EDİTİON',
    description: 'Read insightful articles, tips, and expert opinions.',
    icon: NewspaperIcon,
  },
  // {
  //   title: 'Products',
  //   description: 'Find the perfect solution for your needs.',
  //   icon: RectangleGroupIcon,
  // },
  // {
  //   title: 'Special Offers',
  //   description: 'Explore limited-time deals and bundles',
  //   icon: TagIcon,
  // },
]

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const renderItems = navListMenuItems.map(
    (
      { icon, title, description },
      key //dropdown menu
    ) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          {/* <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {' '}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: 'h-6 text-gray-900 w-6',
            })}
          </div> */}
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  )

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-bold">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 text-gray-900 font-bold"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              ÜRÜNLER
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          ANASAYFA
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          HAKKIMIZDA
        </ListItem>
      </Typography>

      {/* dropdown menu */}
      <NavListMenu />

      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          HEALY NEDİR
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          KAMPANYALAR
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">S.S.S</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          İLETİŞİM
        </ListItem>
      </Typography>
    </List>
  )
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 64) {
        // Adjust the value as per your requirement
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  //navbar main
  return (
    <div
      className={`${
        isSticky ? 'sticky top-0 left-0 right-0 z-50  bg-white shadow-md' : ''
      }w-full`}
    >
      <Navbar fullWidth="true" className="mx-auto px-4 py-2">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a href="#" className="pl-12">
            <img
              width="120"
              height="38"
              src="https://turkiye.healy.shop/wp-content/uploads/2022/10/Healy-Horizontal-Logo-with-Dot-RGB@2x-1-120x38.png"
              class="custom-logo"
              alt="Healy Shop Turkiye"
              decoding="async"
              srcset="https://turkiye.healy.shop/wp-content/uploads/2022/10/Healy-Horizontal-Logo-with-Dot-RGB@2x-1-120x38.png 1x, https://turkiye.healy.shop/wp-content/uploads/2022/10/Healy-Horizontal-Logo-with-Dot-RGB@2x-1.png 2x"
              sizes="(max-width: 120px) 100vw, 120px"
            ></img>
          </a>

          {/* <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            Material Tailwind
          </Typography> */}
          <div className="hidden lg:block">
            <NavList />
          </div>
          {/* <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="blue-gray">
            Log In
          </Button>
          <Button variant="gradient" size="sm">
            Sign In
          </Button>
        </div> */}
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  )
}
