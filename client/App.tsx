import React, { useEffect, useState } from 'react';
import './App.css';
import FeedList from './components/FeedList/FeedList';
import FeedDetailsModal from './components/FeedDetails/FeedDetailsModal';
import { fetchFeed, fetchComments } from './services/api'; 

function App() {
    const [feedData, setFeedData] = useState<any[]>([]);
    const [selectedFeed, setSelectedFeed] = useState<any | null>(null);
    const [comments, setComments] = useState<any[]>([]);
    const [page, setPage] = useState(0);

    const getFeedData = async () => {
        try {
            const data = await fetchFeed(page + 1);
            if (page === 0) {
                setFeedData(data);
            } else {
                setFeedData(prevData => [...prevData, ...data]);
            }
        } catch (error) {
            console.error('Error fetching feed data:', error);
        }
    };

    const getComments = async (briefRef: string) => {
        try {
            const data = await fetchComments(briefRef);
            setComments(data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        getFeedData();
    }, [page]);

    const handleFeedClick = (feed: any) => {
        setSelectedFeed(feed);
        getComments(feed.briefref);
    };

    const handleCloseModal = () => {
        setSelectedFeed(null);
        setComments([]);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                setPage(prevPage => prevPage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="App">
            <FeedList feedData={feedData} onFeedClick={handleFeedClick} />

            {selectedFeed && (
                <FeedDetailsModal
                    feed={selectedFeed}
                    comments={comments}
                    onClose={handleCloseModal}
                    // Pass other necessary props to the modal component
                />
            )}
        </div>
    );
}

export default App;
