import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false)
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openModal = () => {
        console.log("hgj")
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return <AppContext.Provider value={{isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal}}>{children}</AppContext.Provider>
}

// Custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
