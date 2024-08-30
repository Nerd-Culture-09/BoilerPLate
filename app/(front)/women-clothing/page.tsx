
import WomenBanner from '@/components/FrontEnd/WomenBanner'
import WomenDepartment from '@/components/FrontEnd/WomenDepartment'
import WomenGlasses from '@/components/FrontEnd/WomenGlasses'
import WomenHandBag from '@/components/FrontEnd/WomenHandBag'
import WomenShoes from '@/components/FrontEnd/WomenShoes'

export default function page() {
    return (
      <div>
        <div className='mt-10 px-0 py-8'>
      <WomenBanner/>
      </div>
        <WomenDepartment/>
        <WomenGlasses/>
        <WomenHandBag/>
        <WomenShoes/>
      </div>
    )
  }