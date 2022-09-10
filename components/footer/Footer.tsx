import React from 'react'
import {selectProfile, setProfileData, setAge} from '../../store/slice/profile'
import {useSelector, useDispatch} from 'react-redux'

export default function Footer() {
    const profile = useSelector(selectProfile)
    const dispatch = useDispatch()
    return (
        <div className="footer p-10 bg-base-200 text-base-content">
            <div>
                <p>Pasal</p>
                <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <h1>footer</h1>
                <p>{profile.name ? profile.name : "not set yet"}</p>
            </div>
        </div>

    )
}
