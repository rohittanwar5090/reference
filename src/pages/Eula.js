import React from 'react'
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import NavbarHeader from '../components/NavbarHeader';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer/Footer';
function Eula() {
    const loading = useLoader()
    return (
        <div>
            <Helmet>
                <title>
                    EZ Colab | EULA
                </title>
            </Helmet>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <div
                            style={{
                                backgroundImage: "linear-gradient(#E0EFFF,#EFF5FC)",
                            }}
                        >
                            <NavbarHeader />
                            <h1 className=' text-[#2a3158]  text-2xl lg:text-5xl font font-semibold pt-40 text-center'>END USER LICENSE AGREEMENT</h1>

                            <div className=' px-4 text-gray-700 lg:px-0 max-w-5xl mx-auto'>
                                <p className='my-3 '>
                                    This End User License Agreement is a legal agreement between you (the “User” or “You”) and VC Learning for use of the software / tool, i.e., EZColab.
                                </p>

                                <p className='my-3 '>
                                    This EULUA governs your use of this website, mobile app available on Google Play Store and App Store  collectively referred to as the “Platform”. It also governs your use of the content, course, chats, materials, posts, activities, and communications, through this Platform for interacting with the other Users.
                                </p>

                                <p className='my-3 '>
                                    By installing, or otherwise using this Platform, you agree to be bound by the terms of this EULA. If you do not agree to the terms of this EULA, you are not authorized to use this Platform. This Platform is protected by copyright laws and other Intellectual Property Rights of VC Learning. VC Learning owns the title, copyright and other intellectual property rights of this Platform, the Software / Tool and the technology being used.
                                </p>

                                <p className='my-3 '>
                                    Remember, <b> THE SOFTWARE/TOOL AND THE USE OF THIS PLATFORM IS LICENSED TO YOU, NOT SOLD.</b>
                                </p>



                                <h1 className=' text-[#2a3158] text-2xl font-bold'>
                                    1.	GRANT OF LICENSE
                                </h1>

                                <p className='my-3 '>
                                    1.1	VC Learning (or its licensor) grants to the User, a non –exclusive, non-transferable, non-sublicensed, non-commercial and personal license to install and/or use the Platform (in whole or in part) and any Software/Tool (the “License”), for such time until User discontinue using the Platform or your Institution terminates the Master Software License Agreement or discontinue paying for the Platform’s subscription charges as agreed between VC Learning and your Institute. In either of the case, User shall be notified via e-mail or pop-up notification in the Platform.
                                </p>

                                <p className='my-3 '>
                                    1.2	VC Learning reserves all other rights. Unless applicable law gives you more rights despite this limitation, you may use the software / tool only as expressly permitted in this Agreement. In doing so, you must comply with any technical limitations in the software / tool that allow you to use it in certain ways.
                                </p>

                                <p className='my-3 '>
                                    1.3	You must in no event use, nor allow others to use the Platform or this License for commercial purpose without obtaining a License to do so from VC Learning.
                                </p>

                                <p className='my-3 '>
                                    1.4	As applicable, certain parts of the Platform may be using third party features, whether or not applicable at this current scenario, some of which may be managed by third-party providers for which additional terms and/or costs may apply. You must comply with such additional terms. Please review such additional terms and costs carefully.
                                </p>

                                <p className='my-3 '>
                                    1.5	You shall not, directly or indirectly:
                                </p>

                                <div className='ml-2 lg:ml-5'>
                                    <p className='my-3 '>
                                        a)	sell, rent out, lease, license, distribute, market, exploit the Platform or any of its parts commercially;
                                    </p>

                                    <p className='my-3 '>
                                        b)	reverse engineer, decompile, disassemble, adapt, reproduce, or create derivate works of this Platform (except if the Platform enable the User through a specific feature to create, generate or submit User Generated Content and for which User will need to create an Account and comply Terms of Service), in whole or in part;
                                    </p>

                                    <p className='my-3 '>
                                        c)	create, use and/or distribute “auto”, “trainer”, “script” or “macro” computer programs or other “cheat” or “hack” programs or software applications for this Platform;
                                    </p>
                                    <p className='my-3 '>
                                        d)	remove, alter, disable or circumvent any copyright and trademark indications or other authorship and origin information, notices or labels contained on or within this Platform; and
                                    </p>
                                    <p className='my-3 '>
                                        e)	export or re-export this Platform or any copy of adaptation in violation of any applicable laws or regulations.
                                    </p>
                                </div>

                                <p className='my-3 '>
                                    1.6	While using the Platform, You agree to comply will all applicable laws, rules and regulations. You also agree to comply with certain rules or community guidelines as framed by your Institute for the effective use and instructions that User needs to follow, that govern Your use of the Platform (“Community Guidelines”). In all cases, User may only use the Platform according to anticipated use of the Platform.
                                </p>

                                <p className='my-3 '>
                                    1.7	Without limiting VC Learning’s rights to take action against You, You may not:
                                </p>

                                <div className='ml-3 lg:ml-5'>
                                    <p className='my-3 '>
                                        a)	create, use, share and/or publish by any means in relation to the Platform any material (text, words, images, sounds, videos, etc.) which would breach of a duty of confidentiality, infringe any intellectual property right or an individual’s right to privacy or which would incite the committing of an unlawful act (in particular, piracy, cracking or circulation of counterfeit software);
                                    </p>
                                    <p className='my-3 '>
                                        b)	modify, distort, block, abnormally burden, disrupt, slow down and/or hinder the normal functioning of all or part of the Platform, or their accessibility to other users, or the functioning of the partner networks of the Platform, or attempt to do any of the above;
                                    </p>

                                    <p className='my-3 '>
                                        c)	transmit or propagate any virus, trojan horse, worm, bomb, corrupted file and/or similar destructive device or corrupted data in relation to the Platform, and/or organize, participate in or be involved in any way in an attack on VC Learning’s or EZColab’s servers and/or the Platform and/or those of its service providers and partners;
                                    </p>
                                    <p className='my-3 '>
                                        d)	create, supply or use alternative methods of using the Platform, for example server emulators;
                                    </p>
                                    <p className='my-3 '>
                                        e)	spamming chat, whether for personal or commercial purposes, by disrupting the flow of conversation with repeated postings of a similar nature;
                                    </p>
                                    <p className='my-3 '>
                                        f)	transmitting or communicating any material or content which, in the sole and exclusive discretion of your Institute, is believed or deemed offensive, including, but not limited to, language that is harmful, threatening, unlawful, abusive, harassing, defamatory, disparaging, obscene, sexually explicit, or racially, ethnically, or otherwise objectionable;
                                    </p>
                                    <p className='my-3 '>
                                        g)	harassing or threatening any other Users in the Platform;
                                    </p>
                                    <p className='my-3 '>

                                        h)	make inappropriate use of the help service or the claim buttons or send untruthful reports to members of VC Learning’s personnel;

                                    </p>
                                    <p className='my-3 '>
                                        i)	falsely claim to be an employee or representative of VC Learning or its partners and/or agents;
                                    </p>
                                    <p className='my-3 '>
                                        j)	falsely claim an endorsement in connection with the Platform or with VC Learning.
                                    </p>
                                </div>



                                <h1 className=' text-[#2a3158] text-2xl font-bold'>
                                    2.	PERMITTED USE OF THE PLATFORM
                                </h1>

                                <p className='my-3 '>
                                    The basic purpose of this Platform is for the effective collaboration and communication with the teachers and the students subject to surveillance by the Administration (“admin”) of the Institute. Upon request of the admin, individual User ID’s and passwords are generated for students, teachers and members of admin. Students can post as anonymous within the Platform. This shall be anonymous only to students but their profiles name will be visible to all instructors and admin to safeguard community guidelines. Upon authorization from the Institute’s admin, VC Learning support staff can login as Institute admin for providing Platform related services. Unique password will be created every time for Institute admin login and will be sent to their registered e-mail to maintain full security. Institute shall have the option to keep their own community guidelines either on landing page or within the Platform. VC Learning shall not be liable for any dispute within the Institution owing to the use of our Platform and any leak communication that may happen between the teacher and the Student or any third party.
                                </p>

                                <h1 className=' text-[#2a3158] text-2xl font-bold'>
                                    3.	OWNERSHIP</h1>

                                <p className='my-3 '>
                                    All title, ownership rights and intellectual property rights in and to the Platform (including, without limitation, logo, wordmark, all text, graphics, source codes, object codes, music or sounds, all messages or items of information, names, themes, objects, videos, audio-visual effects, domain names and any other elements which are part of the Platform, individually or in combination) and any and all copies thereof are owned by VC Learning or its licensors. The Platform is protected by national and international laws, copyright treaties and conventions and other laws. This Platform may contain certain licensed materials and, in that event, VC Learning licensors may protect their rights in the event of any violation of this Agreement. Any reproduction or representation of these licensed materials in any way and for any reason is prohibited without VC Learning prior permission and, if applicable, VC Learning licensors’ and representatives’. Except as expressly set forth in this EULA, all rights not granted hereunder to You are expressly reserved by VC Learning.
                                </p>
                                <p className='my-3 '>
                                    This License confers no title or ownership in the Platform and should not be construed as a sale of any rights in the Platform.
                                </p>

                                <h1 className=' text-[#2a3158] text-2xl font-bold'>4.	WARRANTY DISCLAIMER AND LIMITATION OF LIABILITY
                                </h1>

                                <p className='my-3 '>

                                    4.1	You expressly acknowledge that use of the Platform is at your own risk. To the fullest extent permissible under applicable law, the Platform is built based upon the information provided by the Institute on an “as is” and “as available” basis. VC Learning licensors, channel partners and associated service providers do not make and hereby disclaim any guarantees, conditions, warranties of any kind, express, implied or statutory or other terms including as to: (a) its conformity, accuracy, correctness, completeness, reliability or security (b) its suitability for a particular use; (c) implied warranties of title, non-infringement; (d) its market value; or (e) your satisfaction. VC Learning does not warrant that the platform will be uninterrupted or error-free, that defects will be corrected, or that the platform is free of viruses or other harmful components. You assume all responsibility for selecting the platform to achieve your intended results, and for the installation of, use of, and results obtained from the platform.

                                </p>

                                <p className='my-3 '>
                                    4.2	To the fullest extent permissible under applicable law, in no event will VC Learning, VC Learning’s licensors, channel partners and associated service providers be liable for loss or damage suffered in connection with the use of the platform or any related third party service (if any). This includes without limitation (a) all losses of any kind, whether in tort (including for negligence or breach of statutory duty), contract, misrepresentation (whether innocent or negligent) or otherwise, (b) direct loss; (c) accidental loss, (d) incidental loss, (e) consequential loss, and (f) indirect loss
                                </p>
                                <h1 className=' text-[#2a3158] text-2xl font-bold'>5.	INDEMNITY</h1>
                                <p className='my-3 '>
                                    You are solely responsible for any damage caused to VC Learning, its licensors, channel partners and associated service providers and subcontractors, other Users of the Platform or any other individual or legal entity as a result of Your violation of this EULA.
                                </p>

                                <p className='my-3'>
                                    You hereby agree to defend, indemnify and keep indemnified VC Learning and its affiliates, their licensors, channel partners and associated service providers and their subcontractors against any claim or alleged claims, liabilities, losses damages and all costs (including lawyers’ fees), directly or indirectly attributable to your fault and/or resulting from (a) a violation of any provision of this EULA or (b) your use or misuse of the platform. VC Learning reserves the right to take sole responsibility, at its own expense, for conducting the defense of any claim for which You agreed to indemnify VC Learning. The provisions of this clause 5 shall remain in force after termination of this EULA.
                                </p>


                                <h1 className='  text-[#2a3158] text-2xl font-bold'>6.	TERMINATION</h1>


                                <p className='my-3'>
                                    The EULA is effective from the earlier of the date You purchase, download or use the Platform, until terminated according to its terms. You and VC Learning (or its licensors) may terminate this EULA, at any time, for any reason. Termination by VC Learning will be effective upon (a) notice to You or (b) termination of Your EZColab Account (if any) or (c) at the time of VC Learning decision to discontinue offering and/or supporting the Platform. This EULA will terminate automatically if You fail to comply with any of the terms and conditions of this EULA. Upon termination for any reason, You must immediately uninstall the Platform and destroy all copies of the Platform in Your possession.

                                </p>


                                <h1 className=' text-[#2a3158] text-2xl font-bold'>7.	MISCELLANEOUS</h1>

                                <p className='my-3 '>
                                    7.1	VC Learning is not responsible for maintaining or helping you use the Platform, except through VC Learning’s Registered Support Service and extended Technical Support. To receive these services, must call or email at the details below:
                                </p>

                                <p className='my-3 '>
                                    7.2	This EULA is governed by the laws of India.
                                </p>
                                <p className='my-3 '>
                                    7.3	If there exists any need to update this EULA, Users will be notified via e-mail sent to their registered email id.
                                </p>
                            </div>
                        </div>
                        <Footer />
                    </>
                )
            }
        </div>
    )
}

export default Eula
