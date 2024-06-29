<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="/accueil">Accueil</a>
                <a class="nav-item nav-link" href="/login">Login</a>
                <a class="nav-item nav-link" href="/historic">Historique</a>
                
            </div>
        </div>
    </nav>
      <h1>Historique Page</h1>
      <input type="search" name="search" placeholder="Recherche de Quiz">
      <!--<table style="border: solid;text-align: center;">
        <tr>
          <th>Nom du Quizz</th>
          <th>Modo du Quizz</th>
          <th>Date et heure du quizz</th>
          
        </tr>
        <tr>
          <td>Recent Quiz</td>
        </tr>
        <tr>
          <td>Recent Quiz</td>
        </tr>
        <tr>
          <td>Recent Quiz</td>
        </tr>
      </table> -->

    </div>
    <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Invoices</h3>
                  </div>
                  <div class="card-body border-bottom py-3">
                    <div class="d-flex">
                      <div class="text-secondary">
                        Show
                        <div class="mx-2 d-inline-block">
                          <input type="text" class="form-control form-control-sm" value="8" size="3" aria-label="Invoices count">
                        </div>
                        entries
                      </div>
                      <div class="ms-auto text-secondary">
                        Search:
                        <div class="ms-2 d-inline-block">
                          <input type="text" class="form-control form-control-sm" aria-label="Search invoice">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap datatable">
                      <thead>
                        <tr>
                          <th class="w-1"><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices"></th>
                          <th class="w-1">No. <!-- Download SVG icon from http://tabler-icons.io/i/chevron-up -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-sm icon-thick" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>
                          </th>
                          <th>QUIZZ</th>
                          <th>MODO</th>
                          <th>DATE ET HEURE</th>
                          <th>Status</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
                          <td><span class="text-secondary">001401</span></td>
                          <td><a href="#" class="text-reset" tabindex="-1">QUIZZ  RECENT</a></td>
                          <td>
                            
                            Carlson Limited
                          </td>

                          <td>
                            DATE&HEURE_QUIZZ
                          </td>
                          <td>
                            <span class="badge bg-success me-1"></span> Paid
                          </td>
                          
                          <td class="text-end">
                            <span class="dropdown">
                              <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">SUPPRIMER</button>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">
                                  SUPPRIMER
                                </a>
                                <a class="dropdown-item" href="#">
                                  MODIFIER
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
                          <td><span class="text-secondary">001402</span></td>
                          <td><a href="#" class="text-reset" tabindex="-1">QUIZZ RECENT</a></td>
                          <td>
                            
                            Adobe
                          </td>
                          <td>
                            DATE&HEURE_QUIZZ
                          </td>
                          <td>
                            <span class="badge bg-warning me-1"></span> Pending
                          </td>
                          
                          <td class="text-end">
                            <span class="dropdown">
                              <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">SUPPRIMERs</button>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">
                                  SUPPRIMER
                                </a>
                                <a class="dropdown-item" href="#">
                                  Another SUPPRIMER
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
                          <td><span class="text-secondary">001403</span></td>
                          <td><a href="#" class="text-reset" tabindex="-1">QUIZZ RECENT</a></td>
                          <td>
                            
                            Bluewolf
                          </td>

                          <td>
                            DATE&HEURE_QUIZZ
                          </td>
                          <td>
                            <span class="badge bg-warning me-1"></span> Pending
                          </td>
                          
                          <td class="text-end">
                            <span class="dropdown">
                              <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">SUPPRIMERs</button>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">
                                  SUPPRIMER
                                </a>
                                <a class="dropdown-item" href="#">
                                  MODIFIER
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
                          <td><span class="text-secondary">001404</span></td>
                          <td><a href="#" class="text-reset" tabindex="-1">QUIZZ RECENT</a></td>
                          <td>
                            
                            Salesforce
                          </td>

                          <td>
                            2 Sep 2017
                          </td>
                          <td>
                            <span class="badge bg-secondary me-1"></span> Due in 2 Weeks
                          </td>
                          
                          <td class="text-end">
                            <span class="dropdown">
                              <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">SUPPRIMERs</button>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">
                                  SUPPRIMER
                                </a>
                                <a class="dropdown-item" href="#">
                                  Another SUPPRIMER
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
                          <td><span class="text-secondary">001405</span></td>
                          <td><a href="#" class="text-reset" tabindex="-1">QUIZZ RECENT</a></td>
                          <td>
                            
                            Printic
                          </td>

                          <td>
                            29 Jan 2018
                          </td>
                          <td>
                            <span class="badge bg-danger me-1"></span> Paid Today
                          </td>
                          
                          <td class="text-end">
                            <span class="dropdown">
                              <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">SUPPRIMERs</button>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">
                                  SUPPRIMER
                                </a>
                                <a class="dropdown-item" href="#">
                                  Another SUPPRIMER
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
                          <td><span class="text-secondary">001406</span></td>
                          <td><a href="#" class="text-reset" tabindex="-1">QUIZZ RECENT</a></td>
                          <td>
                            
                            Tabdaq
                          </td>

                          <td>
                            4 Feb 2018
                          </td>
                          <td>
                            <span class="badge bg-secondary me-1"></span> Due in 3 Weeks
                          </td>
                          
                          <td class="text-end">
                            <span class="dropdown">
                              <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">SUPPRIMERs</button>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">
                                  SUPPRIMER
                                </a>
                                <a class="dropdown-item" href="#">
                                  Another SUPPRIMER
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
                          <td><span class="text-secondary">001407</span></td>
                          <td><a href="#" class="text-reset" tabindex="-1">QUIZZ RECENT</a></td>
                          <td>
                            
                            Apple
                          </td>

                          <td>
                            22 Mar 2018
                          </td>
                          <td>
                            <span class="badge bg-success me-1"></span> Paid Today
                          </td>
                          
                          <td class="text-end">
                            <span class="dropdown">
                              <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">SUPPRIMERs</button>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">
                                  SUPPRIMER
                                </a>
                                <a class="dropdown-item" href="#">
                                  Another SUPPRIMER
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
                          <td><span class="text-secondary">001408</span></td>
                          <td><a href="#" class="text-reset" tabindex="-1">QUIZZ RECENT</a></td>
                          <td>
                            
                            Tookapic
                          </td>

                          <td>
                            13 May 2018
                          </td>
                          <td>
                            <span class="badge bg-success me-1"></span> Paid Today
                          </td>
                          
                          <td class="text-end">
                            <span class="dropdown">
                              <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">SUPPRIMERs</button>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">
                                  SUPPRIMER
                                </a>
                                <a class="dropdown-item" href="#">
                                  Another SUPPRIMER
                                </a>
                              </div>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="card-footer d-flex align-items-center">
                    <p class="m-0 text-secondary">Showing <span>1</span> to <span>8</span> of <span>16</span> entries</p>
                    <ul class="pagination m-0 ms-auto">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                          <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                          prev
                        </a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item active"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">4</a></li>
                      <li class="page-item"><a class="page-link" href="#">5</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          next <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            
        
  </template>
  
  <script>
  export default {
    name: 'HistoricPage',
  };
  </script>
  