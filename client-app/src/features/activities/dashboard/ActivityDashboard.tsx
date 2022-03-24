import React, { useEffect, useState } from 'react';
import { Grid, Loader} from 'semantic-ui-react';
import ActivityList from './ActivityList';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityFilter from '../../activities/dashboard/ActivityFilters';
import { PagingParams } from '../../../app/models/pagination';
import InfiniteScroll from 'react-infinite-scroller';
import ActivityListItemPlaceholder from './ActivityListItemPlaceholder';

export default observer(function ActivityDashboard() {

    const { activityStore } = useStore();
    const { loadActivities, activityRegistry, setPagingParams, pagination } = activityStore;
    const [loadingNext, setLoadingNext] = useState(false);

    function handleGetNext() {
        setLoadingNext(true);
        setPagingParams(new PagingParams(pagination!.currentPage + 1));
        loadActivities().then(() => setLoadingNext(false));
    }
  
    useEffect(() => {
        if(activityRegistry.size === 0) loadActivities();
        
    }, [activityRegistry.size, loadActivities]);

    // if (activityStore.loadingInitial && !loadingNext) return (<LoadingComponent content="Loading activities..." />);

    return (
        
            <Grid>
            <Grid.Column width='10'>
                {
                    activityStore.loadingInitial && !loadingNext ? (
                        <>
                            <ActivityListItemPlaceholder />
                            <ActivityListItemPlaceholder />
                        </>
                    ) : (
                        <InfiniteScroll width={10}
                            pageStart={0}
                            loadMore={handleGetNext}
                            hasMore={!loadingNext && !!pagination && pagination.currentPage < pagination.totalPages}
                            initialLoad={false}
                        >
                            <ActivityList />
                        </InfiniteScroll>
                    )
                }
                
                
                {/* <Button 
                    floated='right'
                    content='More...'
                    positive
                    onClick={handleGetNext}
                    loading={loadingNext}
                    disabled={pagination?.totalPages === pagination?.currentPage}
                /> */}
                </Grid.Column>
                <Grid.Column width='6'>
                    <ActivityFilter/>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Loader active={loadingNext} />
                
                </Grid.Column>
            </Grid>
        
        
    );

})