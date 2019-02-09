export class LoadingService {
    loadingCache = new Set();
  
    _register(loading) {
      this.loadingCache.add(loading);
    }
  
    _unregister(loadingToRemove) {
      this.loadingCache.delete(loadingToRemove);
    }
  
    show() {
      this.loadingCache.forEach(loading => {
          loading.show = true;      
      });
    }
  
    hide() {
      this.loadingCache.forEach(loading => {     
          loading.show = false;      
      });
    }
  
    isShowing(loadingName) {
      let showing = undefined;
      this.loadingCache.forEach(loading => {
        if (loading.name === loadingName) {
          showing = loading.show;
        }
      });
      return showing;
    }
  }
  
  const loadingService = new LoadingService();
  
  export { loadingService }