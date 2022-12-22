import PermissionList, { PermissionListProps } from './permissions-list'
import PermissionListMobile from './permissions-list-mobile'

interface PermissionsProps {
  permissionListProps: PermissionListProps
}

export default function Permissions({ permissionListProps }: PermissionsProps) {
  return (
    <div className="w-full">
      <PermissionList {...permissionListProps} />
      <PermissionListMobile {...permissionListProps} />
    </div>
  )
}
