import MedicalCollegePage from "./MedicalPage2";
import Transition from "../transition";
const colleges = [
  {
    id: 1,
    name: "Dr. Radhakrishnan Government Medical College, Hamirpur, H.P",
    image:
      "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTk5ZmQ1OTMwLTc2ZjQtMTFlZi1hZjA3LTliZDRjMmZlZGU4Yi5qcGc=",
    seats: 4,
    description:
      "Dr. Radhakrishnan Government Medical College, Hamirpur is a full-fledged tertiary Medical College in Hamirpur, Himachal Pradesh. It was established in the year 2018. The college imparts the degree of Bachelor of Medicine and Surgery (MBBS). The college is affiliated to Atal Medical and Research University, Mandi, Himachal Pradesh and is recognised by the National Medical Commission (NMC). The selection to the college is done on the basis of merit through National Eligibility cum Entrance Test (UG). The College has an annual intake of 120 undergraduates. The campus of the Medical College and Hospital is under construction in ranges located along Hamirpur-Nadaun Road. The college started its MBBS course from August 2018.",
    feeStructure: "20,000/- USD",
    established: "2018",
    type: "Medical College and Hospital",
    affiliations: "Atal Medical and Research University (AMRU)",
    courses: ["MBBS"],
    certifications: ["NAAC A++", "UGC Certified", "ISO 9001:2015"],
    location: "Hamirpur, Himachal Pradesh",
    website: "https://www.drrmc.ac.in/",
    ranking: 7,
    exams: ["NEET-UG", "HP-NEET"],
    form: "/Form"
  },
  {
    id: 2,
    name: "Dr. Rajendar Prasad Government Medical College, Tanda, H.P",
    image: "http://rpgmc.ac.in/wp-content/uploads/2020/03/slider2-1-min.jpg",
    seats: 4,
    description:
      "The Rajendra Institute of Medical Sciences (RIMS), formerly Rajendra Medical College and Hospital, is a medical school located in Ranchi, capital of the state of Jharkhand, India. It was established in 1960. The college is an autonomous body established under an act of Jharkhand Assembly. The institute provides free medical service along with medicines. Developments in the field of surgery include minimal access cosmetically sound (MACS) surgery. RIMS administrative wing parking and Vivekanand park as seen from academic complex. The RIMS has blocks in a multi-storied building with several medical departments. RIMS has about 33 departments which include emergency, Blood bank, Pathology, Forensic Medicine, Orthopedic, Neurosurgery, OBST & Gynae, ENT, Eye, Anesthesiology, Biochemistry, Microbiology, Pharmacology, Skin STD & Leprosy, PMR, Urology, Cardiology, Radiology and others. RIMS has facilities like CT scan, emergency pathology for 24 hrs, AIDS Clinic, X-Ray, USG, TeleMedicine Department and a Deep X-Ray unit. Dental institute began functioning in 2017 with an annual intake of 50 students. RIMS has its own blood bank, School of Nursing, dental college and College of Nursing. At RIMS medical courses include MBBS, BDS, postgraduate – MD, MS, DM, MCh and Diploma, Nursing courses include BSc.Nursing and Diploma in General Nursing and Midwifery (GNM). It also offers radiology and pathological investigation facilities. A Regional Institute of ophthalmology Block is coming up. The decision to upgrade the institute to university for conducting MBBS exams was taken in 2016.",
    feeStructure: "20,000/- USD",
    established: "1996",
    type: "Medical College",
    affiliations: "National Medical Commission",
    courses: [
      "MBBS",
      "MD",
      "MS",
      "B.Sc. Paramedical Seats",
      "DNB (Radiodiagnosis)",
      "Post MBBS",
      "Post Diploma",
      "DNB (Neurology)",
      "GNM (Nursing)",
    ],
    certifications: ["NAAC A++", "UGC Certified", "ISO 9001:2015"],
    website: "https://www.rpgmc.ac.in/",
    ranking: 3,
    exams: ["NEET-UG", "NEET-PG", "HP-NEET"],
    form: "/Form"
  },
  {
    id: 3,

    name: "Government Medical College, Nahan, Sirmour H.P.",
    image: "GMCHimanchal.png",
    seats: 150,
    description: "One of the best AIIMS branches in India.",
    feeStructure: "105000 per year",
    established: "2013",
    type: "Government Medical College",
    affiliations: "Atal Medical and Research University",
    courses: ["MBBS", "MD", "PhD"],
    certifications: ["NAAC A++", "UGC Certified", "ISO 9001:2015"],
    website: "https://www.gmchnahan.org/",
    ranking: 5,
    exams: ["NEET-UG", "NEET-PG", "HP-NEET"],
    form: "/Form"
  },

  {
    id: 4,
    name: "Indira Gandhi Medical College, Shimla",
    image: "https://blog.rmgoe.org/wp-content/uploads/2022/07/Indira-Gandhi-Medical-College-Shimla.webp",
    seats: 2,
    description:
      "Himachal Pradesh Medical College at Shimla (HPMC) was established in the year 1966 with admissions of 50 students in the first batch. Indira Gandhi Medical College is affiliated to Himachal Pradesh University, Shimla. With the establishment of Medical College in the State, the hopes and aspirations of the people of the state were met with the standards of health services going on and students benefiting with the advantage of staying home and getting better educational avenues. Medical College then had a modest beginning with makeshift arrangements for hostels etc., but ecstasy of joining the Medical College located in Shimla with its salubrious climate, took away the agony. Himachal Pradesh Medical College was renamed Indira Gandhi Medical College (now popularly known as IGMC in abbreviated form) in 1984. Admission facility was increased to 65 in the year 1978. Now MBBS seats have been increased 65 to 100. 2794 number of MBBS students have passed out from this Medical College till 2014. The post Graduate courses were started in 16 disciplines in the year 1981.Now these are increased 16 to 20 disciplines. So far 923 postgraduates and 377 in diploma students have passed out from IGMC till date. More PG courses have been added from the session 2002-2005 in the specialties of Radiotherapy (Oncology) and Skin & VD. Total number of PG Degree seats are 96. DNB in Cardiology and MCH in CTVS have been started by IGMC. 187 B.Sc Paramedical students have passed out till 2014. Now PG courses in the disciplines of Psychiatry and Pulmonary Medicine have been started. 50% seats are available at IGMC through all India Quota from 2005 onwards.15% seats in M.B.B.S. course are available to all India Quota and 2 seats are available to NRI candidates. Indira Gandhi Medical College Shimla has also been granted the status of Regional Cancer Center by the Govt. of India, thus providing much needed comprehensive cancer care to the cancer patient. Essential periodical up gradation of facilities for investigations and treatment have been going on regularly and in the year 2005 facility of Open Heart Surgery has been made operational and in 2006 MRI facility has been added. Second Cobalt Unit & 64 slice MDCT are also operational.",
    feeStructure: "20,000/- USD",
    established: "1966",
    type: "Public Medical School",
    affiliations: "Atal Medical and Research University",
    courses: ["MBBS", "MD", "MS", "DM", "PG Diploma", "M.CH."],
    certifications: ["NAAC A++", "UGC Certified", "ISO 9001:2015"],
    location: "Shimla, Himachal Pradesh",
    website: "https://www.igmcshimla.org/",
    ranking: 1,
    exams: ["NEET-UG", "NEET-PG", "HP-NEET"],
    form: "/Form"
  },

  {
    id: 5,
    name: "Pt. Jawahar Lal Nehru Government Medical College, Chamba",
    image: "https://collegekaka.com/wp-content/uploads/2023/12/Pt.-Jawahar-Lal-Nehru-Govt.-Med.-College-Chamba.webp",
    seats: 4,
    description:
      "The Government College Chamba generally known as Government Post Graduate College, Chamba at Chamba, Himachal Pradesh, India was established in 1958. The college is affiliated to Sardar Patel University Mandi, Shimla and has switched to Choice Based Credit System (CBCS) for Under Graduate classes from academic session 2013-14 under the guidelines of Rashtriya Uchchatar Shiksha Abhiyan (RUSA). It has its own examination centre and also has been recognized as the evaluation centre by the university. The college was accredited with 'B++' grade by NAAC in August 2022. Pt. Jawahar Lal Nehru Government Medical College And Hospital Chamba offers course to the students at UG level. The institute offers a total of 1 course to students including MBBS. The institute has a total seat intake capacity of 120 students and offers course in Full Time mode. Further, the course provided by the institute is approved by NMC. Pt. Jawahar Lal Nehru Government Medical College And Hospital Chamba course is offered to students in stream, namely Medicine & Health Sciences. Pt. Jawahar Lal Nehru Government Medical College And Hospital Chamba course is offered to students with a fee of INR 2,70,000.",
    feeStructure: "20,000/- USD",
    established: "2017",
    type: "Public Medical College",
    affiliations: "Atal Medical and Research University",
    courses: ["MBBS"],
    certifications: ["NAAC A++", "UGC Certified", "ISO 9001:2015"],
    website: "https://www.jlgmcc.org/",
    ranking: 6,
    exams: ["NEET-UG", "HP-NEET"],
    form: "/Form"
  },

  {
    id: 6,
    name: "Shri Lal Bahadur Shastri Government Medical College, Mandi, HP",
    image: "http://www.slbsgmchmandi.com/public/pages/homepage/slider2_1647875241_1647923915.jpg",
    seats: 2,
    description:
      "Shri Lal Bahadur Shastri Government Medical College & Hospital (or SLBC GMCH) is a public medical college located in Mandi, Himachal Pradesh, affiliated to Atal Medical and Research University, Mandi, HP. It was founded as Employee's State Insurance Corporation Medical College in 2009 by Shri Oscar Fernandes, the then Minister of Labour & Employment, Government of India. In the year 2016, the management of the ESIC showed its reluctance to run this college at its own and ultimately the project was handed over to the government of Himachal Pradesh after signing a memorandum of understanding under certain conditions. The government of Himachal Pradesh has applied to the MCI to accord permission for starting the batch from 2017–18 for this medical college now named as Shri Lal Bahadur Shastri Govt. Medical College, Mandi at Ner Chowk. The total specialisation offered at the institute include Pharmacology. SLBSGMC&H offers 4 courses, including B.Sc, MD and MBBS. The total seat intake for these courses is 186. These Degree courses are offered across multiple streams, namely Nursing and Medicine & Health Sciences. The total course fee at this institute ranges between INR 1,17,000-2,70,000 and the courses are approved by NMC and INC. The institute offers UG and PG courses in Full Time mode.",
    feeStructure: "20,000/- USD",
    established: "2017",
    type: "Public Medical School",
    affiliations: "Atal Medical and Research University",
    courses: ["MBBS"],
    certifications: ["NAAC A++", "UGC Certified", "ISO 9001:2015"],
    website: "https://www.slbsgmchmandi.com/",
    ranking: 4,
    exams: ["NEET-UG", "HP-NEET"],
    form: "/Form"
  },
  {

    id: 7,
    name: "Maharishi Markandeshwar Medical College & Hospital, Solan",
    image: "https://mmmch.mmusolan.org/images/slider/3.jpg",
    seats: 23,
    description:
      "MM Medical College & Hospital, Kumarhatti-Solan (H.P). A Constituent College of Maharishi Markandeshwar University, Kumarhatti-Solan (H.P) Ideally located on Chandigarh-Shimla National Highway in the Devbhoomi of Himachal Pradesh at Kumarhatti-Solan, the MM Medical College & Hospital was established in 2013 as a constituent Institute of Maharishi Markandeshwar University, Solan, under the aegis of the MM University Trust founded by a distinguished public figure Shri Tarsem Kumar Garg in November 1993. The College supported by 720- bedded Super-Speciality Hospital is well equipped with state-of—the-art infrastructure and latest ultra-modern equipments and happens to be the first self-financing Medical College in the State and has 150 seats which is the maximum number of seats of MBBS course in any Medical College in the State. With highly qualified faculty of competent and long experienced doctors, the College is likely to prove a landmark in the growth and development of the State in general and rendering excellent medical care services and health science education in the State in particular. MBBS was recognized by Medical Council of India and Ministry of Health & Family Welfare in 2018.The College has also been sanctioned PG courses of MD/MS in twenty clinical and non-clinical specialities by the Medical Council of India/Govt. of India and has also introduced the M.Sc. (Medical) courses in Anatomy, Pharmacology, Physiology, Bio-chemistry, Microbiology. The Medical College is also offering various Diploma and Degree(UG) paramedical courses.",
    feeStructure: "42,159/- USD",
    established: "2013",
    type: "Private Medical School",
    affiliations: "UGC (University Grants Commission)",
    courses: ["MBBS", "MS", "MD"],
    certifications: ["NAAC A++", "UGC Certified", "ISO 9001:2015"],
    website: "https://mmmch.mmusolan.org/",
    ranking: 2,
    exams: ["NEET-UG", "NEET-PG", "HP-NEET"],
    form: "/Form"
  },
]


const Rajasthan = () => (
  <MedicalCollegePage
    stateName="Rajasthan"
    stateImage="./images/Rajasthan.jpg"
    colleges={colleges}
  />
)

const transitionRajasthan = Transition(Rajasthan);

export default transitionRajasthan;