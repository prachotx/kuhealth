import React from 'react'
// icon
import { RiMentalHealthLine } from "react-icons/ri";
import { RxComponent1 } from "react-icons/rx";
import { PiDnaFill } from "react-icons/pi";
import { CgTrees } from "react-icons/cg";
import { MdOutlineCleanHands } from "react-icons/md";
import { MdOutlineDoNotTouch } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { LiaSmileWink } from "react-icons/lia";
import { IoMdFitness } from "react-icons/io";
import { RiHospitalLine } from "react-icons/ri";
import { RiHealthBookLine } from "react-icons/ri";
import { TbHealthRecognition } from "react-icons/tb";

function Content() {
    return (
        <main className='max-w-6xl mt-5 mx-auto px-5 md:px-10 lg:px-20'>
            <div className="">
                <div className='bg-white rounded p-2'>

                    <div className='flex justify-between text-lg'>
                        <h2 className='border-l-4 border-green-400 px-2'>การสร้างเสริมสภาวะสุขภาพ</h2>
                    </div>

                    <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2'>
                        <div>

                            <div className='mt-2 bg-green-300 p-3 rounded'>

                                <div>
                                    <h3 className='flex items-center text-xl'><RiMentalHealthLine className='text-4xl mr-2 text-green-900' />สุขภาพ</h3>
                                </div>

                                <div className='mt-2'>
                                    <p>เป็นรากฐานที่สำคัญของการดำรงชีวิตของมนุษย์ ที่จะนำชีวิตไปสู้ความสำเร็จ มีคุณภาพชีวิตที่ดี ดั้งนั้น สุขภาพจึงเป็นเรื่องที่ทุกคนที่เป็นเจ้าของ ต้องดูแลรับผิดชอบ สร้างและระวังรักษาส่งเสริมสุขภาพด้วยตนเอง</p>
                                </div>

                            </div>

                            <div className='mt-2 bg-red-300 p-3 rounded'>

                                <div>
                                    <h3 className='flex items-center text-xl'><MdOutlineDoNotTouch className='text-4xl mr-2 text-red-900' />พฤตกิรรมที่บั่นทอนสุขภาพ</h3>
                                </div>

                                <div className='mt-2'>
                                    <ul>
                                        <li className='border-l-4 border-red-500 px-2 mb-2'>พฤตกิรรมการบริโภคอาหารที่ไม่ถูกต้อง</li>
                                        <li className='border-l-4 border-red-500 px-2 mb-2'>พฤติกรรมการออกกำลังกาย/ขาดการพักผ่อน</li>
                                        <li className='border-l-4 border-red-500 px-2 mb-2'>พฤติกรรมการสูบบุหรีติดสิ่งเสพติต</li>
                                        <li className='border-l-4 border-red-500 px-2 mb-2'>พฤติกรรมการดื่มสุราของมึนเมาอื่นๆ</li>
                                        <li className='border-l-4 border-red-500 px-2 mb-2'>พฤติกรรมการเล่นการพนัน</li>
                                        <li className='border-l-4 border-red-500 px-2 mb-2'>พฤติกรรมการส่ำส่อนทางเพศ</li>
                                        <li className='border-l-4 border-red-500 px-2 mb-2'>พฤติกรรมการใช้ชีวิตที่รุนแรง เสี่ยงต่ออุบัติภัย</li>
                                        <li className='border-l-4 border-red-500 px-2 mb-2'>พฤติกรรมการใช้ยารักษาโรคไม่ถูกต้อง</li>
                                    </ul>
                                </div>

                            </div>

                            <div className='mt-2 bg-green-300 p-3 rounded'>

                                <div>
                                    <h3 className='flex items-center text-xl'><TbHealthRecognition className='text-4xl mr-2 text-green-900' />ปัจจัยที่มีผลต่อสุขภาพ</h3>
                                </div>

                                <div className='mt-2'>
                                    <p>มนุษย์เมื่อเกิดเป็นตัวอ่อนหลังการปฏิสนธิก็ได้รับอิทธิพลทางพันธุกรรมจากพ่อ และแม่ที่เป็นตัวกำหนดสุขภาพมาสู่โลกภายนอกก็มีปัจจัยมากมายที่มีอิทธิพลต่อ สุขภาพของมนุษย์ เช่น</p>
                                    <ul className='mt-2'>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>ความยากจนการขาดรายได้นำไปสู่ความขาดแคลนอาหารน้ำ ที่อยู่อาศัย เครื่องนุ่งห่มที่ถูกสุขลักษณะ ขาดการศึกษา และด้อยฐานะในสังคม</li>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>สงครามทำให้เกิดการบาดเจ็บ ความอดอยากขาดสาธารณูปโภคโรคระบาด</li>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>ด้อยการศึกษา ขาดความรู้ทำให้ไม่อาจดูแลปกป้องสุขภาพของตัวเองได้</li>
                                    </ul>
                                </div>

                            </div>

                            <div className='mt-2 bg-green-300 p-3 rounded'>

                                <div>
                                    <h3 className='flex items-center text-xl'><RiHealthBookLine className='text-4xl mr-2 text-green-900' />สุขบัญญัติ 10 ประการ</h3>
                                </div>

                                <div className='mt-2'>
                                    <ul className='mt-2'>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>ดูแลรักษาและของใช้ให้สะอาด</li>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>รักษาฟันให้แข็งแรง และแปรงฟันทุกวัน อย่างถูกต้อง</li>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>ล้างมือให้สะอาดก่อนกินอาหารและหลังการขับถ่าย</li>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>กินอาหารสุก สะอาด ปราศจากสารอันตราย และหลีกเลี่ยงอาหารรสจัด สีฉูดฉาด</li>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>งดบุหรี่ สุรา สารเสพติด การพนัน และการส่ำส่อนทางเพศ</li>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>สร้างความสัมพันธ์ในครอบครัวให้อบอุ่น</li>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>ป้องกันอุบัติภัยด้วยการไม่ประมาท</li>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>ออกกำลังกายสม่ำเสมอ และตรวจสุขภาพประจำปี</li>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>ทำจิตใจให้ร่าเริงแจ่มใส่อยู่เสมอ</li>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>มีสำนึกต่อส่วนรวมร่วมสร้างสรรค์สังคม</li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div>

                            <div className='mt-2 bg-green-300 p-3 rounded'>

                                <div>
                                    <h3 className='flex items-center text-xl'><RxComponent1 className='text-4xl mr-2 text-green-900' />องค์ประกอบที่มีอิทธิพลต่อสุขภาพ</h3>
                                </div>

                                <div className='mt-2'>
                                    <ul>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>พันธุกรรม</li>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>สิ่งแวดล้อม</li>
                                        <li className='border-l-4 border-green-500 px-2 mb-2'>พฤตกิรรมและสุขปฏิบัติ</li>
                                        <li className='border-l-4 border-green-500 px-2 '>บริการด้านการแพทย์และสาธารณสุข</li>
                                    </ul>
                                </div>

                                <div className='mt-2 bg-green-500 p-3 rounded'>

                                    <div>
                                        <h3 className='flex items-center text-xl'><PiDnaFill className='text-4xl mr-2 text-green-900' />พันธุกรรม (Heredity)</h3>
                                    </div>

                                    <div className='mt-2'>
                                        <p>เป็นการถ่ายทอดลักษณะต่างๆทางกายและจิตใจจาก พ่อแม่บรรพบรุษุไปยังลูกหลานโดยลักษณะต่างๆอาจมี ความปกติและบกพร่อง โรคถ่ายทอดทางพันธุกรรมคือ โลหิตจางธาลัสซีเมีย โรคเลือดตาบอดสี ภูมิแพ้ เบาหวาน ลมชัก ปัญญาอ่อน (Down ‘s Syndrome)</p>
                                    </div>

                                </div>

                                <div className='mt-2 bg-green-500 p-3 rounded'>

                                    <div>
                                        <h3 className='flex items-center text-xl'><CgTrees className='text-4xl mr-2 text-green-900' />สิ่งแวดล้อม (Environment)</h3>
                                    </div>

                                    <div className='mt-2'>
                                        <p>หมายถึง สิ่งที่อยู่รอบๆตัวทั้งมีชีวิตและไม่มีชีวิตที่เกิดขึ้นเอง ตามธรรมชาติ และที่มนุษย์สร้างขึ้นเป็นสิ่งที่มีอิทธิพลการ ถ่ายทอดลักษณะต่างๆทั้งทางกายและจิตตั้งแต่อยู่ในครรภ์ มารดา และหลังคลอดไปตลอดชีวิต</p>
                                    </div>

                                </div>

                                <div className='mt-2 bg-green-500 p-3 rounded'>

                                    <div>
                                        <h3 className='flex items-center text-xl'><MdOutlineCleanHands className='text-4xl mr-2 text-green-900' />สุขปฏิบัติ (Health Practice)</h3>
                                    </div>

                                    <div className='mt-2'>
                                        <p>หมายถึง การปฏิบัติที่จะให้เกิดผลต่อสุขภาพ ซึ่งจะเป็น
                                            ตัวกำหนดสุขภาพที่สำคัญยิ่งและเป็นเรื่องที่สำคัญทุกวันน้ี เราตอ้งเผชิญปัญหาทางสุขภาพ ล้วนมาจากพฤตกิรรมที่ไม่เหมาะสมการสร้างสุขภาพจึงเป็นหน้าที่ของ เราเอง</p>
                                    </div>

                                </div>

                                <div className='mt-2 bg-green-500 p-3 rounded'>

                                    <div>
                                        <h3 className='flex items-center text-xl'><MdOutlineHealthAndSafety  className='text-6xl mr-2 text-green-900 md:text-4xl lg:text-4xl' />บริการด้านการแพทย์ (Medical services)</h3>
                                    </div>

                                    <div className='mt-2'>
                                        <p>การบริการด้านการแพทย์การสาธารณสุข
                                            ถ้ามีการบริหารจัดอย่างทั่วถึงและมีคุณภาพทั้งทางการ
                                            ส่งเสริมสุขภาพ การป้องกันโรค การรักษาพยาบาลและการฟื้นฟู</p>
                                    </div>

                                </div>

                            </div>

                            <div className='mt-2 bg-blue-300 p-3 rounded'>

                                <div>
                                    <h3 className='flex items-center text-xl'><RiContactsLine className='text-6xl mr-2 text-black md:text-4xl lg:text-4xl' />ช่องทางให้บริการด้านสุขภาพของมหาวิทยาลัย</h3>
                                </div>

                                <div className='mt-2'>
                                    <ul>

                                        <li>
                                            <a href="https://www.facebook.com/profile.php?id=100069550274732" className='flex items-center bg-pink-400 rounded-md p-2 hover:bg-pink-500 transition duration-200'>
                                                <LiaSmileWink className='text-4xl text-white mr-2'/>
                                                <p className='uppercase text-white'>KU CSC Happy Place Center</p>
                                            </a>
                                        </li>

                                        <li className='mt-2'>
                                            <a href="https://www.facebook.com/fitness.kucsc" className='group flex items-center bg-gray-500 rounded-md p-2 hover:bg-gray-600 transition duration-200'>
                                                <IoMdFitness className='text-4xl text-gray-200 mr-2 group-hover:text-white transition duration-200'/>
                                                <p className='uppercase text-white'>fitness ku csc</p>
                                            </a>
                                        </li>

                                        <li className='mt-2'>
                                            <a href="https://www.facebook.com/infirmary.ku.csc40766" className='group flex items-center bg-green-500 rounded-md p-2 hover:bg-green-600 transition duration-200'>
                                                <RiHospitalLine className='text-5xl text-gray-200 mr-2 group-hover:text-white transition duration-200'/>
                                                <p className='uppercase text-white'>สถานพยาบาล มหาวิทยาลัยเกษตรศาสตร์</p>
                                            </a>
                                        </li>

                                    </ul>
                                </div>

                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </main >
    )
}

export default Content