// 'use client';

// import { useState, useEffect } from 'react';
// import { ApiResponse } from '@/app/_api/api';

// interface UseApiState<T> {
//   data: T | null;
//   loading: boolean;
//   error: string | null;
// }

// interface UseApiOptions {
//   immediate?: boolean;
// }

// // API 호출을 위한 커스텀 훅
// export function useApi<T>(
//   apiCall: () => Promise<ApiResponse<T>>,
//   options: UseApiOptions = { immediate: true }
// ) {
//   const [state, setState] = useState<UseApiState<T>>({
//     data: null,
//     loading: false,
//     error: null,
//   });

//   const execute = async () => {
//     setState(prev => ({ ...prev, loading: true, error: null }));
    
//     try {
//       const response = await apiCall();
      
//       if (response.success) {
//         setState({
//           data: response.data || null,
//           loading: false,
//           error: null,
//         });
//       } else {
//         setState({
//           data: null,
//           loading: false,
//           error: response.message || 'API 요청에 실패했습니다.',
//         });
//       }
//     } catch (error) {
//       setState({
//         data: null,
//         loading: false,
//         error: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
//       });
//     }
//   };

//   useEffect(() => {
//     if (options.immediate) {
//       execute();
//     }
//   }, []);

//   return {
//     ...state,
//     execute,
//     refetch: execute,
//   };
// }

// // 폴더 목록을 가져오는 훅
// export function useFolders() {
//   const { folderApi } = require('@/lib/api');
//   return useApi(() => folderApi.getFolders());
// }