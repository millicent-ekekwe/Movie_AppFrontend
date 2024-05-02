// import React, { useState } from 'react';

// const HeroSection = ({ setSearchQuery, handleSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSearchQuery(query);
//     handleSearch();
//   };

//   return (
//     <div className="hero">
//       <div className="hero-content">
//         <form onSubmit={handleSubmit}>
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search for a movie..."
//               className='search-input'
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//             <button type="submit">Search</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
