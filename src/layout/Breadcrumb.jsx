import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import FormCreatePost from "@/components/FormCreatePost"
  
const BreadcrumbNav = () => {
  return (
    <div className='mb-7'>
    <Breadcrumb className="mb-2">
      <BreadcrumbList>
          <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
          <BreadcrumbLink href="/about">About </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
          <BreadcrumbLink> <FormCreatePost /></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
      </BreadcrumbList>
      </Breadcrumb>

    </div>
  )
}

export default BreadcrumbNav
