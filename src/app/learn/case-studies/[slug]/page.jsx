import './case-studies.css';
import BlogHero from '../../../../components/BlogHero';
import { Fragment } from 'react';
import Link from 'next/link';
import caseStudyData from '@/textContent/case-studies/cardData.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return [
        {
            slug: 'fertech-doors-and-windows-pvt-ltd',
        },
    ];
}

export default function Page({ params }) {
    if (params.slug != 'fertech-doors-and-windows-pvt-ltd') {
        return notFound();
    }

    const post = `<div class="ql-editor read-mode"><h3>The Company</h3><p>Established in 2016, <a href="https://fertechproducts.com/in/" rel="noopener noreferrer">Fertech Doors and Windows Pvt Ltd</a>, Malappuram are specialised in the production and sales of high-quality doors and window frames. The group of skilled and experienced teams execute the production from wireframe to delivery on clients’ work sites. Their qualitative workforce with an efficient, quality-oriented service meets the customer’s requirements with the best in the industry available material. The word of publicity mostly relies on satisfied customers and thus they became one of the pioneers within a short span of time. Yet they were struggling with few shortcomings including lack of an efficient ERP system.</p><h4>Challenges</h4><p><img src="https://wahni.io/assets/img/case-study/problem-solving.webp" alt="problem solving">Though Fertech Doors and Windows Pvt Ltd, Malappuram is one of the leading companies in Kerala, they had difficulties managing the operations to fulfil the commitments they have made to their customers. <strong>Following the old-school methods of managing and maintaining the ledgers somehow strained their manufacturing process.</strong></p><p>The time consumed in production management which had to pass several operational stages and the interruptions in calculating the cost at each stage of progress affected their on-time response after-sales and client service, the management and employees were continuously involved in handling queries and solving them, rather than focusing on growth.</p><p><strong> They were looking for a world-class system to digitise their operations and the information on their fingers tips entire operations.</strong> Having heard that the <a href="https://wahni.io/services/erp-implementation.html" rel="noopener noreferrer">ERP implementation</a> could save their business, one of the Directors approached Wahni IT Solutions - A Thrissur-based ERPNext partner to know more about ERP solutions and how the implementation of the same would lead them to the next level.</p><h4>Identifying the loopholes to get a solution</h4><p><img src="https://wahni.io/assets/img/case-study/thinking.webp" alt="thinking">By understanding the prospects of implementing an ERP system, Wahni started to observe the company closely to identify the weakest part of the strongest company was nothing other than the time consumed during the process of progressing each custom-made manufacturing based on different client’s requirements.</p><p>Wahni’s analysis identified the requirements of Fertech and suggested the implementation of modules <strong>Sales, CRM, Purchase, Inventory, Accounts, Asset, Manufacturing and Quality to get Daily reports, manufacturing status, Financials and operating costs.</strong> Accepting the findings of Wahni, Fertech implemented the ERPNext services to their system and waited to see the magical results.</p><h4>Achieving Notable Goals with ERPNext</h4><p><img src="https://wahni.io/assets/img/case-study/crisis-solving.webp" alt="crisis solving">After the successful implementation of <a href="https://wahni.io/" rel="noopener noreferrer">ERPNext software</a>, Fertech centralised its management and automated its complete business processes cost-effectively. The new working pattern which was accessible to every employee made their job hassle-free and results were easy to obtain. Some impactful changes that came with the implementation of ERPNext are:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Notification and reminders of incoming enquiries helped the conversion of more orders with a <strong>15% increment</strong> in sales <strong>from the first month</strong> of implementation.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Reduced the time in providing quotations by inserting multiple price lists and timely approvals.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><br></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>The sales team were able to track the sales orders along with the present stage of their demands to fulfil their on-time commitment to the customers.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Multi-level raw material details and testing the outgoing quality of the product enhanced the overall product quality.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><br></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>100 % tracking</strong> on raw material consumption saved approximately <strong>4%</strong> of their raw material consumption through stocks module management.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Timely notifications and reminders</strong> enhanced customer relationships.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><br></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Automated payment receipt messages and alerts</strong> made customer communications trustworthy.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>ERPNext operated the entire system empowering the management for strategic decision-making based on real-time data by reducing operational errors for a better client service</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><br></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Auditing was made expedited which <strong>increased the investors’ trust</strong> in the company.</li></ol><h4><img src="https://wahni.io/assets/img/case-study/business-goal.webp" alt="bussiness goal">Nourishing Customer Relationship</h4><p>Dealing with the front-end information is the key to reaching a prospective client which helps every business grow. Based on the proactiveness of a provider the customer chooses to be with or not to be with them. Managing the customer data, enriching their insights through live interactions and strong customer support makes a business fly high. Through the implementation of an exclusive CRM module at the Fertechs, Wahni paved a way for better customer support by enhancing visibility, reducing data duplication, and getting proper attention to the priority customers which also enhanced the prospective clients, leads and opportunities which helped more conversion, sales, cost calculations during every stage of work progress, after-sales requirements, also the tracking of efficiency of the sales team.</p><h4>Improving Sales</h4><p>By tracking the sales process efficiently, Fertechs could organise their sales and after-sales commitments. The simple configurations of the ERPNext module provided by Wahni helped them in expanding and improving the sales channels, increasing sales volume, and enhancing advanced communication with the priority customers based on the trade history. Based on the inputs, a sales efficiency report of each salesperson is being updated which helps the company to identify the potential, strengths, and weaknesses of the employees and advise them on betterments and improvements if needed.</p><h4>Stock Purchase and Maintenance</h4><p>The implementation of the ERPNext purchase module streamlined the entire life cycle of the procurement and purchase process, including the raw materials for product development. The team was able to manage the minute details of its purchases, identify its potential suppliers, compare supplier prices and enhance the billing process. The stock module optimised the inventory by prompting the exact availability of the raw materials along with an alert, a timely reminder of the balance availability of stock- the purchase forecast.</p><h4>Customisation</h4><p>ERPNext can be customised to any extent as per the client’s requirement. Here, for Fertech, Wahni had developed a system where the company could prioritise the needs of its exclusive clients.</p><p>They could easily follow up on the progress of multiple orders and update the client accordingly. For every order, the detailed work progress could be checked and updated and anyone looped in the system can access the update. So the inspection of the system and updates on the delivery status are made easy and hassle-free. Above all, the transparency of the work module and commitments are kept intact. Now we can proudly say they are one of the top beneficiaries of <a href="https://wahni.io/products/erpnext.html" rel="noopener noreferrer">ERPNext in Kerala</a>.</p><h4>Why ERPNext?</h4><p>ERPNext is a one-stop solution for all those old-school ledger methods of business. Implementing the customised ERPNext into one’s business could definitely improve business values and morale. Here, with Fertech, Wahni had gone a step further where the company could easily track the history of all its businesses under every branch and franchisee across the state. Not only the orders but every single proceeding they make with the order.</p><p>The detailed dashboard helped them to keep an eye on every employee’s work process who is on the role and helped the company to help their employee to be keen and highly motivated with what they do. According to the client, they are satisfied since,</p><p> They are updated on the production progress of their order.</p><p> They get the status report as per their requirement anytime, anywhere.</p><p> They get prompt delivery on time.</p><p><br></p><p>So there is a win-win solution for every individual associated with every single order. And the implementation of ERPNext software has made it possible and transparent, thanks to the technology.</p><h4>About Wahni</h4><p>Wahni IT solution founded in 2021, provides ERPNext implementation services and associated mobile apps exclusive for Manufacturing, Distribution and Health care verticals. <strong>Done around 40 + implementations</strong> including Steel Door manufacturing, Paint manufacturing, Aluminium extrusions and <strong>managing 60 + Sites</strong> in Frappe cloud under Wahni’s AMC. <a href="https://wahni.io/contact.html#contactForm" rel="noopener noreferrer">Contact us</a> today to schedule a consultation and see how we can help you achieve your goals.</p></div>`;

    return (
        <Fragment>
            <BlogHero
                title={caseStudyData[0].heading}
                tag="Case Studies"
                image={caseStudyData[0].image}
                date={new Date()}
                author={caseStudyData[0].profile}
                readTime={15}
            />

            <div
                className="py-6 md:px-5 px-5"
                dangerouslySetInnerHTML={{ __html: post }}
            ></div>

            <div className="my-24 md:px-5 flex justify-center">
                <div className="px-2 py-4 md:px-6 md:py-8 md:w-2/3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 md:flex justify-between items-center">
                    <p className="text-xl md:text-3xl font-bold text-white pb-4">
                        Feeling inspired? Pass it on! <br />
                        Share this blog with your network
                    </p>
                    <div className="">
                        <Link
                            href={`https://twitter.com/intent/tweet?url=https://wahni.io/learn/blogs/${params.slug}`}
                        >
                            <i className="ri-twitter-x-fill bg-white rounded-full mx-3 p-2 text-xl text-black hover:transition-all delay-50 duration-200 hover:shadow-lg"></i>
                        </Link>
                        <Link
                            href={`https://wa.me/?text=https://wahni.io/learn/blogs/${params.slug}`}
                        >
                            <i className="ri-whatsapp-fill bg-white rounded-full mx-3 p-2 text-xl text-green-400 hover:transition-all delay-50 duration-200 hover:shadow-lg"></i>
                        </Link>
                        <Link
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://wahni.io/learn/blogs/${params.slug}`}
                        >
                            <i className="ri-linkedin-box-fill bg-white rounded-full mx-3 p-2 text-xl text-blue-400 hover:transition-all delay-50 duration-200 hover:shadow-lg"></i>
                        </Link>
                        <Link
                            href={`https://www.facebook.com/sharer/sharer.php?u=https://wahni.io/learn/blogs/${params.slug}`}
                        >
                            <i className="ri-facebook-circle-fill bg-white rounded-full mx-3 p-2 text-2xl text-blue-500 hover:transition-all delay-50 duration-200 hover:shadow-lg"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
