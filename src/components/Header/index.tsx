import {Link} from "react-router-dom";
import { ViewGridIcon } from '@heroicons/react/outline'

export function Header() {
  return (
    <header>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex-shrink-0">
              <ViewGridIcon className="h-8 w-8 text-sky-400" aria-hidden="true" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                <Link to="users" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Users</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
