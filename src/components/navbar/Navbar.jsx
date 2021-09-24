import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLink,NavBtn,NavBtnLink} from './NavbarElements.style'
import {animateScroll as scroll } from 'react-scroll'

const Navbar = ({toggle}) => {
    const toggleHome = ()=>{
        scroll.scrollToTop()
    }
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/" onClick={toggleHome}>dolla </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink
                             to="about"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-10}
                            
                            >About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                             to="discover"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-10}>Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="services"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-10}>Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="signup"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-10}>Signup</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar 