import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EventsPage, { eloader } from "./Pages/EventsPage";
import HomePage from "./Pages/HomePage";
import EventDetailPage, {
  action as deleteaction,
  loader as eventloader,
} from "./Pages/EventDetailPage";
import EditEventPage from "./Pages/EditEventPage";
import Root from "./Pages/root";
import Eventsroot from "./Pages/Eventsroot";
import Error from "./Pages/Error";
import NewsletterPage, { action as newsaction } from "./Pages/NewsletterPage";
import NewEventPage from "./Pages/NewEventPage";
import { action as eventaction } from "./components/EventForm";
// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <Eventsroot />,
          children: [
            { index: true, element: <EventsPage />, loader: eloader },
            {path:'',id:'p', loader: eventloader,children:[
              { path: ":id", element: <EventDetailPage />,action:deleteaction },
              { path: ":id/edit", element: <EditEventPage />,action:eventaction },
            ]},
            { path: "new", element: <NewEventPage />,action:eventaction },
          ],
        },
        {
          path: 'newsletter',
          element: <NewsletterPage/>,
          action: newsaction,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
