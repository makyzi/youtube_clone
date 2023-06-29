import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { Videos } from './'

import { fetchFromApi } from '../utils/fetchFromApi'

const SearchFeed = () => {
	const [videos, setVideos] = useState([])
	const { searchTerm } = useParams()

	useEffect(() => {
		fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
			setVideos(data.items)
		})
	}, [searchTerm])

	return (
		<Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
			<Typography
				variant="h4"
				fontWeight="bold"
				sx={{ color: '#fff' }}
				mb={2}
			>
				Search results for:
				<span style={{ color: '#f31503' }}>{searchTerm}</span> videos
			</Typography>
			<Videos videos={videos} />
		</Box>
	)
}

export default SearchFeed
