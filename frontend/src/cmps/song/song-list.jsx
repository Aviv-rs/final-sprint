import { SongPreview } from './song-preview'
import { Droppable } from 'react-beautiful-dnd'
export const SongList = ({ songs, station = null }) => {

    return <Droppable droppableId={station._id}>
        {(provided) =>
            <section className='song-list'
                ref={provided.innerRef}
                {...provided.droppableProps}
            >

                {songs.map((song, idx) =>
                    <SongPreview
                        key={idx}
                        song={song}
                        station={station}
                        currSongIdx={idx}
                        songIdx={idx}
                    />
                )
                }
                {provided.placeholder}
            </section>
        }
    </Droppable>
}
