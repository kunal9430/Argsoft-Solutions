import React, { useEffect, useState } from 'react'

const TechStack = () => {
    const techStack = [
      [
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FTechnologyUsed%2Fzyqf1vrwzmbgj7xopsby&w=1080&q=75',
          text: 'HTML'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FTechnologyUsed%2Ft2w40xnckjdck4kncjrb&w=640&q=75',
          text: 'CSS'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FTechnologyUsed%2Fmm4nipyhlxi71qegns94&w=1080&q=75',
          text: 'JS'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FTechnologyUsed%2Fpgspqz3qc7zdt4lqj0lk&w=1080&q=75',
          text: 'React'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722440832%2FSWS%2FMain%2FTechnologyUsed%2Fc2lbaoj7juohv26vdp23.png&w=1080&q=75',
          text: 'Tailwind CSS'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FTechnologyUsed%2Fvvptyek7hvis3txeyksl&w=1080&q=75',
          text: 'Next'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722442217%2FSWS%2FMain%2FTechnologyUsed%2Fy7zqs7ikzpsc70mmxilk.png&w=1080&q=75',
          text: 'Redux'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FTechnologyUsed%2Fimj2qy9dgq9gtr7t72so&w=1080&q=75',
          text: 'Angular'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FTechnologyUsed%2Fn97edlh8xqkc8ur5mebo&w=1080&q=75',
          text: 'Vue'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722442454%2FSWS%2FMain%2FTechnologyUsed%2Fkzoz6mcvraarrzzwioz4.png&w=1080&q=75',
          text: 'Figma'
        }
      ],

      [
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FTechnologyUsed%2Ffhthexocwah0nfmwqkwi&w=640&q=75',
          text: 'Node'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722443101%2FSWS%2FMain%2FTechnologyUsed%2Fxu1k8r36irjibgmozewk.png&w=1080&q=75',
          text: 'Django'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722443863%2FSWS%2FMain%2FTechnologyUsed%2Famvblp3fbnyiv5mxv28u.png&w=640&q=75',
          text: 'Spring Boot'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722443093%2FSWS%2FMain%2FTechnologyUsed%2Fducvwlxfbfe68xpop0m4.png&w=1080&q=75',
          text: 'Laravel'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FTechnologyUsed%2Fvvptyek7hvis3txeyksl&w=1080&q=75',
          text: 'Next'
        } 
      ],

      [
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722474405%2FSWS%2FMain%2FTechnologyUsed%2Fqdor567owtd1d6jr8fem.png&w=640&q=75',
          text: 'MongoDB'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722474358%2FSWS%2FMain%2FTechnologyUsed%2Fhfihf2rby1wugipdz0vf.png&w=1080&q=75',
          text: 'MySQL'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722474463%2FSWS%2FMain%2FTechnologyUsed%2Fdcmhvqqsrwyc7lxwczmx.png&w=1080&q=75',
          text: 'PostgreSQL'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722474504%2FSWS%2FMain%2FTechnologyUsed%2Fevo8sk3p1bdytbt9icgu.png&w=1080&q=75',
          text: 'Redis'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722475474%2FSWS%2FMain%2FTechnologyUsed%2Fkt7ctt25gzqpuddvilvj.png&w=1080&q=75',
          text: 'Oracle DB'
        } 
      ],

      [
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722476886%2FSWS%2FMain%2FTechnologyUsed%2Fkq1epytkzvrhp8z8eduw.png&w=1080&q=75',
          text: 'Docker'
        },
        {
          img: 'https://res.cloudinary.com/devxykr37/image/upload/v1722476960/SWS/Main/TechnologyUsed/ofpyppbddovrrzbwigjl.svg',
          text: 'Kubernetes'
        },
        {
          img: 'https://res.cloudinary.com/devxykr37/image/upload/v1722476973/SWS/Main/TechnologyUsed/rwq7kclc7nun99onx3ts.svg',
          text: 'AWS'
        },
        {
          img: 'https://res.cloudinary.com/devxykr37/image/upload/v1722477147/SWS/Main/TechnologyUsed/lb54kcrdgrslupuxzrln.svg',
          text: 'Ansible'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722477271%2FSWS%2FMain%2FTechnologyUsed%2Fkzrvt9rvgp02spqk8wro.png&w=1080&q=75',
          text: 'Jenkins'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722477192%2FSWS%2FMain%2FTechnologyUsed%2Fxzrvcfclbuskxltpiunt.png&w=1080&q=75',
          text: 'Git'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722477754%2FSWS%2FMain%2FTechnologyUsed%2Fk0o26jjymyjzb1ixruxx.png&w=1080&q=75',
          text: 'Terraform'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722477443%2FSWS%2FMain%2FTechnologyUsed%2Fgbfdhei0tdojmobxhvlg.png&w=1080&q=75',
          text: 'Maven'
        } 
      ],

      [
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722478383%2FSWS%2FMain%2FTechnologyUsed%2Fzeqqp7pgtc8o4x9y3wxf.png&w=1080&q=75',
          text: 'Kotlin'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722478405%2FSWS%2FMain%2FTechnologyUsed%2Fl0akhnojofypbsrpjiik.png&w=1080&q=75',
          text: 'Swift'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722478809%2FSWS%2FMain%2FTechnologyUsed%2Fw8mjcyrxtvspubb5qp3c.png&w=1080&q=75',
          text: 'React Native'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722478490%2FSWS%2FMain%2FTechnologyUsed%2Fsvtirhv7dep0ziidzl6o.png&w=1080&q=75',
          text: 'Flutter'
        } 
      ],

      [
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722480133%2FSWS%2FMain%2FTechnologyUsed%2Fb9zwxevgx42m0vxp0tjk.png&w=1080&q=75',
          text: 'TensorFlow'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722480144%2FSWS%2FMain%2FTechnologyUsed%2Fhhbeiyctc75vbnq9czgh.png&w=1080&q=75',
          text: 'PyTorch'
        },
        {
          img: 'https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Fv1722480154%2FSWS%2FMain%2FTechnologyUsed%2Fzchezoqlt1swpog8mx7e.png&w=1080&q=75',
          text: 'Scikit-Learn'
        } 
      ]
    ]

    const [tech, setTech] = useState(0);

    return (
      <div className='flex justify-center items-center'>
        <div className='mx-5 xl:w xl:w-[1240px]'>
          <div className='w-full flex flex-col gap-10 my-10'>
            <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl p-3 font-bold text-center'>Best Technology for your Projects</h1>
            <div className='flex flex-col gap-5'>

              <div className='flex justify-center gap-10 items-center bg-white p-5 rounded-lg overflow-x-scroll'>
                <button onClick={() => setTech(0)} className={`border-2 w-36 px-3 py-3 rounded-lg font-bold bg-gray-400 ${tech===0&&'bg-indigo-600 text-white' }`}>Frontend</button>
                <button onClick={() => setTech(1)} className={`border-2 w-36 px-3 py-3 rounded-lg font-bold bg-gray-400 ${tech===1&&'bg-indigo-600 text-white' }`}>Backend</button>
                <button onClick={() => setTech(2)} className={`border-2 w-36 px-3 py-3 rounded-lg font-bold bg-gray-400 ${tech===2&&'bg-indigo-600 text-white' }`}>Database</button>
                <button onClick={() => setTech(3)} className={`border-2 w-36 px-3 py-3 rounded-lg font-bold bg-gray-400 ${tech===3&&'bg-indigo-600 text-white' }`}>DevOps</button>
                <button onClick={() => setTech(4)} className={`border-2 w-36 px-3 py-3 rounded-lg font-bold bg-gray-400 ${tech===4&&'bg-indigo-600 text-white' }`}>Mobile Dev</button>
                <button onClick={() => setTech(5)} className={`border-2 w-36 px-3 py-3 rounded-lg font-bold bg-gray-400 ${tech===5&&'bg-indigo-600 text-white' }`}>AI/ML</button>
              </div>

              <div className='flex justify-around bg-white p-5 rounded-lg'>
                {
                    techStack[tech].map((itr,index) => 
                      <div key={index} className="flex flex-col items-center justify-center gap-3">
                        <img className="h-16 w-auto" src={itr.img} alt={itr.text} />
                        <h1 className="text-base font-semibold tracking-wide">{itr.text}</h1>
                      </div>
                    )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      )
}

export default TechStack
