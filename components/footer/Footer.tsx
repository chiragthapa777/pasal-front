import React from 'react'
import {selectProfile, setProfileData, setAge} from '../../store/slice/profile'
import {useSelector, useDispatch} from 'react-redux'

export default function Footer() {
    const profile = useSelector(selectProfile)
    const dispatch = useDispatch()
    return (
        <div className="footer p-10 bg-base-100 text-base-content border-t-[1px] border-base-content/10">
            <div>
                <p className={`text-2xl font-bold`}>पसल</p>
                <p>Pasal Industries Ltd.<br/>Designed and developed by Chirag Thapa</p>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Link</span>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Account</a>
                <a className="link link-hover">Vendors</a>
                <a className="link link-hover">Sign in as Vendor</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </div>

    )
}
