Search.setIndex({docnames:["_themes/README","changelog","custodian","custodian.ansible","custodian.cli","custodian.feff","custodian.nwchem","custodian.qchem","custodian.vasp","index","modules"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["_themes/README.rst","changelog.rst","custodian.rst","custodian.ansible.rst","custodian.cli.rst","custodian.feff.rst","custodian.nwchem.rst","custodian.qchem.rst","custodian.vasp.rst","index.rst","modules.rst"],objects:{"":{custodian:[2,0,0,"-"]},"custodian.ansible":{actions:[3,0,0,"-"],interpreter:[3,0,0,"-"]},"custodian.ansible.actions":{DictActions:[3,1,1,""],FileActions:[3,1,1,""],get_nested_dict:[3,3,1,""]},"custodian.ansible.actions.DictActions":{add_to_set:[3,2,1,""],inc:[3,2,1,""],pop:[3,2,1,""],pull:[3,2,1,""],pull_all:[3,2,1,""],push:[3,2,1,""],push_all:[3,2,1,""],rename:[3,2,1,""],set:[3,2,1,""],unset:[3,2,1,""]},"custodian.ansible.actions.FileActions":{file_copy:[3,2,1,""],file_create:[3,2,1,""],file_delete:[3,2,1,""],file_modify:[3,2,1,""],file_move:[3,2,1,""]},"custodian.ansible.interpreter":{Modder:[3,1,1,""]},"custodian.ansible.interpreter.Modder":{modify:[3,4,1,""],modify_object:[3,4,1,""]},"custodian.cli":{converge_geometry:[4,0,0,"-"],converge_kpoints:[4,0,0,"-"],cstdn:[4,0,0,"-"],run_nwchem:[4,0,0,"-"],run_vasp:[4,0,0,"-"]},"custodian.cli.converge_geometry":{do_run:[4,3,1,""],get_runs:[4,3,1,""]},"custodian.cli.converge_kpoints":{do_run:[4,3,1,""],get_runs:[4,3,1,""],main:[4,3,1,""]},"custodian.cli.cstdn":{main:[4,3,1,""],print_example:[4,3,1,""],run:[4,3,1,""]},"custodian.cli.run_nwchem":{do_run:[4,3,1,""],main:[4,3,1,""]},"custodian.cli.run_vasp":{do_run:[4,3,1,""],get_jobs:[4,3,1,""],load_class:[4,3,1,""],main:[4,3,1,""]},"custodian.custodian":{Custodian:[2,1,1,""],CustodianError:[2,7,1,""],ErrorHandler:[2,1,1,""],Job:[2,1,1,""],MaxCorrectionsError:[2,7,1,""],MaxCorrectionsPerHandlerError:[2,7,1,""],MaxCorrectionsPerJobError:[2,7,1,""],NonRecoverableError:[2,7,1,""],ReturnCodeError:[2,7,1,""],ValidationError:[2,7,1,""],Validator:[2,1,1,""]},"custodian.custodian.Custodian":{LOG_FILE:[2,5,1,""],from_spec:[2,6,1,""],run:[2,4,1,""],run_interrupted:[2,4,1,""]},"custodian.custodian.ErrorHandler":{check:[2,4,1,""],correct:[2,4,1,""],is_monitor:[2,5,1,""],is_terminating:[2,5,1,""],max_num_corrections:[2,5,1,""],n_applied_corrections:[2,5,1,""],raise_on_max:[2,5,1,""],raises_runtime_error:[2,5,1,""]},"custodian.custodian.Job":{name:[2,5,1,""],postprocess:[2,4,1,""],run:[2,4,1,""],setup:[2,4,1,""],terminate:[2,4,1,""]},"custodian.custodian.Validator":{check:[2,4,1,""]},"custodian.feff":{handlers:[5,0,0,"-"],interpreter:[5,0,0,"-"],jobs:[5,0,0,"-"]},"custodian.feff.handlers":{UnconvergedErrorHandler:[5,1,1,""]},"custodian.feff.handlers.UnconvergedErrorHandler":{check:[5,4,1,""],correct:[5,4,1,""],is_monitor:[5,5,1,""]},"custodian.feff.interpreter":{FeffModder:[5,1,1,""]},"custodian.feff.interpreter.FeffModder":{apply_actions:[5,4,1,""]},"custodian.feff.jobs":{FeffJob:[5,1,1,""]},"custodian.feff.jobs.FeffJob":{postprocess:[5,4,1,""],run:[5,4,1,""],setup:[5,4,1,""]},"custodian.nwchem":{handlers:[6,0,0,"-"],jobs:[6,0,0,"-"]},"custodian.nwchem.handlers":{NwchemErrorHandler:[6,1,1,""]},"custodian.nwchem.handlers.NwchemErrorHandler":{check:[6,4,1,""],correct:[6,4,1,""]},"custodian.nwchem.jobs":{NwchemJob:[6,1,1,""]},"custodian.nwchem.jobs.NwchemJob":{postprocess:[6,4,1,""],run:[6,4,1,""],setup:[6,4,1,""]},"custodian.qchem":{handlers:[7,0,0,"-"],jobs:[7,0,0,"-"]},"custodian.qchem.handlers":{QChemErrorHandler:[7,1,1,""],QChemSCFErrorHandler:[7,1,1,""]},"custodian.qchem.handlers.QChemErrorHandler":{check:[7,4,1,""],correct:[7,4,1,""],is_monitor:[7,5,1,""]},"custodian.qchem.handlers.QChemSCFErrorHandler":{check:[7,4,1,""],correct:[7,4,1,""],is_monitor:[7,5,1,""]},"custodian.qchem.jobs":{QCJob:[7,1,1,""],perturb_coordinates:[7,3,1,""]},"custodian.qchem.jobs.QCJob":{current_command:[7,5,1,""],opt_with_frequency_flattener:[7,6,1,""],postprocess:[7,4,1,""],run:[7,4,1,""],setup:[7,4,1,""]},"custodian.utils":{backup:[2,3,1,""],get_execution_host_info:[2,3,1,""]},"custodian.vasp":{handlers:[8,0,0,"-"],interpreter:[8,0,0,"-"],jobs:[8,0,0,"-"],validators:[8,0,0,"-"]},"custodian.vasp.handlers":{AliasingErrorHandler:[8,1,1,""],CheckpointHandler:[8,1,1,""],DriftErrorHandler:[8,1,1,""],FrozenJobErrorHandler:[8,1,1,""],LrfCommutatorHandler:[8,1,1,""],MaxForceErrorHandler:[8,1,1,""],MeshSymmetryErrorHandler:[8,1,1,""],NonConvergingErrorHandler:[8,1,1,""],PositiveEnergyErrorHandler:[8,1,1,""],PotimErrorHandler:[8,1,1,""],StdErrHandler:[8,1,1,""],StoppedRunHandler:[8,1,1,""],UnconvergedErrorHandler:[8,1,1,""],VaspErrorHandler:[8,1,1,""],WalltimeHandler:[8,1,1,""]},"custodian.vasp.handlers.AliasingErrorHandler":{check:[8,4,1,""],correct:[8,4,1,""],error_msgs:[8,5,1,""],is_monitor:[8,5,1,""]},"custodian.vasp.handlers.CheckpointHandler":{check:[8,4,1,""],correct:[8,4,1,""],is_monitor:[8,5,1,""],is_terminating:[8,5,1,""]},"custodian.vasp.handlers.DriftErrorHandler":{check:[8,4,1,""],correct:[8,4,1,""]},"custodian.vasp.handlers.FrozenJobErrorHandler":{check:[8,4,1,""],correct:[8,4,1,""],is_monitor:[8,5,1,""]},"custodian.vasp.handlers.LrfCommutatorHandler":{check:[8,4,1,""],correct:[8,4,1,""],error_msgs:[8,5,1,""],is_monitor:[8,5,1,""]},"custodian.vasp.handlers.MaxForceErrorHandler":{check:[8,4,1,""],correct:[8,4,1,""],is_monitor:[8,5,1,""]},"custodian.vasp.handlers.MeshSymmetryErrorHandler":{check:[8,4,1,""],correct:[8,4,1,""],is_monitor:[8,5,1,""]},"custodian.vasp.handlers.NonConvergingErrorHandler":{check:[8,4,1,""],correct:[8,4,1,""],is_monitor:[8,5,1,""]},"custodian.vasp.handlers.PositiveEnergyErrorHandler":{check:[8,4,1,""],correct:[8,4,1,""],is_monitor:[8,5,1,""]},"custodian.vasp.handlers.PotimErrorHandler":{check:[8,4,1,""],correct:[8,4,1,""],is_monitor:[8,5,1,""]},"custodian.vasp.handlers.StdErrHandler":{check:[8,4,1,""],correct:[8,4,1,""],error_msgs:[8,5,1,""],is_monitor:[8,5,1,""]},"custodian.vasp.handlers.StoppedRunHandler":{check:[8,4,1,""],correct:[8,4,1,""],is_monitor:[8,5,1,""],is_terminating:[8,5,1,""]},"custodian.vasp.handlers.UnconvergedErrorHandler":{check:[8,4,1,""],correct:[8,4,1,""],is_monitor:[8,5,1,""]},"custodian.vasp.handlers.VaspErrorHandler":{check:[8,4,1,""],correct:[8,4,1,""],error_msgs:[8,5,1,""],is_monitor:[8,5,1,""]},"custodian.vasp.handlers.WalltimeHandler":{check:[8,4,1,""],correct:[8,4,1,""],is_monitor:[8,5,1,""],is_terminating:[8,5,1,""],raises_runtime_error:[8,5,1,""]},"custodian.vasp.interpreter":{VaspModder:[8,1,1,""]},"custodian.vasp.interpreter.VaspModder":{apply_actions:[8,4,1,""]},"custodian.vasp.jobs":{GenerateVaspInputJob:[8,1,1,""],VaspJob:[8,1,1,""],VaspNEBJob:[8,1,1,""]},"custodian.vasp.jobs.GenerateVaspInputJob":{postprocess:[8,4,1,""],run:[8,4,1,""],setup:[8,4,1,""]},"custodian.vasp.jobs.VaspJob":{constrained_opt_run:[8,6,1,""],double_relaxation_run:[8,6,1,""],full_opt_run:[8,6,1,""],metagga_opt_run:[8,6,1,""],postprocess:[8,4,1,""],run:[8,4,1,""],setup:[8,4,1,""],terminate:[8,4,1,""]},"custodian.vasp.jobs.VaspNEBJob":{postprocess:[8,4,1,""],run:[8,4,1,""],setup:[8,4,1,""]},"custodian.vasp.validators":{VaspFilesValidator:[8,1,1,""],VaspNpTMDValidator:[8,1,1,""],VasprunXMLValidator:[8,1,1,""]},"custodian.vasp.validators.VaspFilesValidator":{check:[8,4,1,""]},"custodian.vasp.validators.VaspNpTMDValidator":{check:[8,4,1,""]},"custodian.vasp.validators.VasprunXMLValidator":{check:[8,4,1,""]},custodian:{ansible:[3,0,0,"-"],cli:[4,0,0,"-"],custodian:[2,0,0,"-"],feff:[5,0,0,"-"],nwchem:[6,0,0,"-"],qchem:[7,0,0,"-"],utils:[2,0,0,"-"],vasp:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","staticmethod","Python static method"],"3":["py","function","Python function"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"],"6":["py","classmethod","Python class method"],"7":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:staticmethod","3":"py:function","4":"py:method","5":"py:attribute","6":"py:classmethod","7":"py:exception"},terms:{"1ev":8,"1x1x1":[1,8],"abstract":[2,9],"case":[8,9],"catch":[1,2,8],"class":[1,2,3,5,6,7,8,9],"default":[1,2,3,5,6,7,8],"final":[2,5,8,9],"float":[7,8],"function":[1,2,8],"import":[1,9],"int":[2,7,8],"long":[8,9],"new":[1,3,9],"return":[1,2,3,5,6,7,8,9],"static":[1,3,8,9],"switch":[1,8,9],"true":[2,3,5,6,7,8,9],"try":7,AND:9,Added:1,BUT:9,But:8,EOS:8,FOR:9,For:[1,2,3,6,8,9],NOT:9,Not:6,One:8,PBS:[1,8],Such:9,THE:9,The:[0,1,2,3,6,7,8,9],There:[2,8,9],These:2,USE:9,Use:8,Used:[2,5,7,8],Useful:[1,8],Using:9,WITH:9,Will:1,__init__:[2,9],_add_to_set:3,_each:3,_file_copi:[2,3,8,9],_file_delet:3,_file_mov:3,_inc:3,_pop:3,_pull:3,_pull_al:3,_push:3,_push_al:3,_renam:3,_set:[3,8,9],_theme:0,_unset:3,abov:9,absolut:8,abspath:0,access:3,accordingli:8,accur:8,achiev:8,action:[2,5,6,7,8,9,10],action_keyword:3,activ:8,actual:[2,3,5,6,7,8],actual_cont:3,add:[0,9],add_to_set:3,added:[8,9],addit:9,addon:0,address:[1,7],adopt:3,affect:8,aflow:[1,8],after:[1,2,7,8,9],again:9,aimd:8,aka:7,algo:[1,8],algorithm:[7,8],alias:8,aliasing_incar:8,aliasingerrorhandl:[2,8,9],all:[1,2,5,7,8,9],alloc:8,allow:[2,3,7,8,9],alreadi:8,also:[0,8,9],altern:[0,8],alwai:9,ambigu:3,amin:8,amount:8,analysi:[2,7,8,9],ani:[2,3,5,6,7,8,9],annot:9,ansibl:[2,5,6,8,10],anubhav:9,api:[1,3],append:[0,5,6,7,8],appli:[2,5,7,8],applic:9,apply_act:[5,8],approxim:8,arbitrari:1,archiv:5,area:9,arg:[4,6,8,9],argument:[3,8,9],aris:9,around:8,arrang:8,as_dict:3,aspect:9,assimil:1,associ:9,atom:8,atom_relax:8,attempt:8,attribut:2,author:9,auto:[8,9],auto_continu:8,auto_gamma:[1,8],auto_npar:[1,8],automat:[1,5,8],avail:9,averag:8,avoid:[3,5,8],b3lyp:6,back:[2,5,8],background:1,backup:[1,2,5,6,7,8],backward:1,bad:2,badvasprunxmlhandl:1,band:[1,8],base:[1,2,3,5,6,7,8,9],basi:[8,9],basic:[4,5,6,7,8],becaus:3,becom:9,been:[2,7,8,9],befor:[2,7,8],begin:2,being:[6,8],below:9,better:8,between:[2,8,9],bfg:8,biaxial:8,bisect:8,bit:8,bleed:9,bool:[2,3,5,6,7,8],bracket:8,brion:[1,8],brmix:[1,8],buffer:[1,8],buffer_tim:8,bug:[1,9],buggi:9,bye:3,calcul:[1,5,7,8],call:[1,2,5,6,7,8],callabl:2,can:[0,1,2,3,7,8,9],cannot:[2,8],care:8,caus:[1,2,8,9],ceder:9,cell:8,center:1,certain:[8,9],chanc:9,chang:[5,6,8],change_algo:8,charg:9,check:[0,1,2,5,6,7,8,9],check_connect:7,checkpoint:[1,2,8,9],checkpointhandl:8,chemistri:9,chevrier:9,chgcar:8,chk:2,chk_:8,chkpt:8,cholia:9,claim:9,classifi:2,classmethod:[2,7,8],cleanup:[1,2,7,8],cli:[2,10],clone:9,cluster:[1,8],cluster_nam:2,code:[1,2,8,9],collinear:8,combiant:8,combin:[4,8],come:[1,9],command:[6,7,8,9],commatsci:9,common:[2,7,8,9],common_param:2,commonli:1,compat:1,compil:[1,8],complet:[2,8,9],complex:[8,9],compon:9,comprehens:[1,9],compris:9,comput:9,conceiv:8,concret:9,condit:9,conf:0,configur:9,connect:[7,9],consid:[2,8,9],consider:8,consolid:1,constrain:8,constrained_opt_run:8,construct:2,constructor:[5,8],consult:9,contain:[0,5,9],contcar:[2,8,9],contcar_onli:8,content:[0,9,10],continu:8,contract:9,converg:[4,5,7,8,9],converge_geometri:[2,10],converge_kpoint:[1,2,9,10],copi:[2,3,5,6,7,8,9],copy_magmom:8,copyright:9,core:[1,7,8],correct:[1,2,5,6,7,8,9],correspond:8,could:[2,8],counter:2,cours:2,crash:8,creat:[2,3,8,9],creation:[1,2],creator:8,criteria:8,critic:1,cstdn:[1,2,10],current:[1,2,5,6,8,9],current_command:7,custodian:1,custodian_exampl:9,custodian_param:[2,9],custodianerror:2,custom:2,customiz:[2,9],dacek:1,dai:9,damag:9,dan:9,dat:5,data:9,date:9,dav:8,david:1,davidson:9,de_threshold:8,deal:9,def:9,default_save_nam:7,defin:[2,8,9],delet:[3,8],delta:7,demonstr:9,densiti:8,dentet:[1,8],denteterrorhandl:9,deped:1,depend:3,deprec:[1,6],deriv:8,describ:[2,5,6,7,8],desir:[2,8],dest:[2,3,8,9],detail:9,detect:[2,5,6,7,8,9],determin:8,dev:7,develop:9,dft:[1,6,8],dict:[2,3,5,6,7,8,9],dictact:[3,5,8],differ:[2,5,7,8,9],difficult:[2,8],diis_gdm:7,dir:1,direct:[5,6,8],directori:[1,2,5,7,8,9],distribut:9,do_run:4,doc:[0,1],document:[0,1,3,9],doe:[2,3,5,8],doesn:2,doi:9,done:9,doubl:[1,8,9],double_relaxation_run:[8,9],drift:8,drifterrorhandl:[1,8],driv:0,dtbdyn:8,due:[8,9],dure:[1,2,6,7,8,9],dwaraknath:1,each:[2,8,9],earli:2,easiest:9,easili:3,easy_instal:9,edddav:8,eddiag:8,eddrmm:8,eddrrm:8,edfiffg:8,edg:9,ediff:8,ediffg:8,edwav:8,effect:[1,8],either:[2,7,8],electron:[1,8],electronic_step_stop:8,element:8,elf:8,elf_kpar:8,elf_ncl:8,els:7,enabl:1,enaug_multipli:8,encount:[1,2,9],end:[2,5,6,7,8],energi:[8,9],ensembl:8,ensur:2,environ:8,environment:9,equal:2,equival:8,err1:2,err2:2,error:[1,2,3,5,6,7,8,9],error_dict:2,error_msg:8,errorhandl:[1,2,5,6,7,8,9],errors_subset_to_catch:[8,9],errors_subset_to_detect:8,especi:[1,8,9],estim:8,etc:[2,7,8],evalu:8,even:[2,9],event:[1,2,9],ever:8,everi:[1,2,8],exampl:[1,2,3,6,8],examplehandl:9,examplejob:9,exce:8,exceed:8,except:2,excess:8,exclud:8,execut:[2,5,8],exist:[0,8],exit:[1,2],expand:[1,9],expect:[8,9],explicit:2,express:9,fail:[2,8,9],failur:[1,2,7],fairli:9,fall:8,fals:[2,5,6,7,8,9],fast:[1,8],faster:[1,2],fatal:8,featur:[1,9],fed:8,feff:[2,10],feff_cmd:5,feff_out:5,feffinp:5,feffinput:5,feffinput_kei:5,feffjob:5,feffmodd:5,few:[1,8],fft:8,figur:9,file:[1,2,3,5,6,7,8,9],file_copi:3,file_cr:3,file_delet:3,file_modifi:3,file_mov:3,fileact:[3,5,8],filenam:[2,3,5,8],find:8,fine:[8,9],finish:[1,2,8],firework:9,first:[1,2,7,8],fit:9,fix:[1,2,7],flag:[1,2],flask:0,flexibl:[1,8,9],fluctuat:8,folder:[0,1,8],follow:[0,2,3,8,9],forc:8,form:[5,8],format:[2,9],former:2,found:[2,7,8],framework:9,free:9,frequenc:7,from:[1,2,3,5,7,8,9],from_dict:3,from_spec:2,frozen:8,frozenjoberrorhandl:8,full:[3,5,8,9],full_opt_run:8,furnish:9,gamma:[1,8],gamma_vasp_cmd:8,gave:2,gener:[2,5,6,8,9],generate_kpoints_tran:8,generatevaspinputjob:8,genom:9,geoffroi:9,geom_max_cycl:7,geometri:[4,7,8],gerbrand:9,get:8,get_execution_host_info:2,get_job:4,get_nested_dict:3,get_run:4,gga:8,git:0,github:9,give:8,given:[2,9],gracefulli:[1,2,9],grad_not_orth:8,gradient:8,grain:9,grant:9,grid:8,group:8,guess:8,guid:0,guidelin:8,gunter:9,gzip:[1,2,5,6,8],gzipped_output:[2,6,9],gzipped_prefix:5,half_kpt:8,half_kpts_first_relax:8,halv:8,handl:[1,2,7,8,9],handler:[1,2,9,10],hanld:1,happen:8,has:[1,2,7,8,9],hautier:9,have:[1,2,5,8,9],hdlr:[2,9],hello:3,here:9,herebi:9,hermitian:8,hessian:1,high:[8,9],higher:8,highli:[8,9],his:0,hit:8,holder:9,hopefulli:9,host:2,hostnam:2,hour:8,howev:3,hse:8,html_theme:0,html_theme_path:0,http:9,hundr:9,ideal:9,ignor:[3,5,8],immedi:[1,2],implement:[1,2,3,6,8,9],impli:9,imposs:9,improv:[1,2],inc:3,incar:[1,8,9],includ:[1,3,8,9],incompat:1,incorrect:1,incorrect_shift:8,increas:8,increment:[1,9],indefinit:9,index:9,indic:[1,2,3,5,6,7,8],individu:2,infinit:8,inform:[3,5,9],init:8,initi:[2,3,5,6,7,8,9],initial_strain:8,initio:9,inp:5,input:[5,6,7,8,9],input_dict:3,input_fil:[6,7],input_filenam:8,input_set:8,insert:3,instal:9,instanc:2,instead:[1,3,6,8],insuffici:9,integ:8,intend:0,interfac:2,intern:8,interpret:[2,10],interrupt:1,interuppt:2,interv:8,introdc:1,introduc:7,inv_rot_mat:8,invers:8,involv:9,ionic:8,is_monitor:[1,2,5,7,8],is_termin:[1,2,8],ismear:9,issu:[1,9],istart:8,isym:1,iter:7,its:[1,2],jain:9,jit:9,job1:2,job2:2,job3:2,job:[1,2,4,10],jobid:9,jobs_common_param:[2,9],json:[1,2,5,6,7,8,9],just:[8,9],kei:[2,3,8,9],kenneth:0,keyword:3,kill:8,kind:[8,9],known:9,kocher:9,konverg:8,kpar:8,kpoint:[1,8,9],kpoints_tran:8,kr_small:0,kristin:9,kwarg:[7,8],labort:8,langevin:8,languag:3,lapack:8,larg:[0,8,9],larger:7,last:[1,7,8],latest:[1,9],latter:2,lattic:8,lattice_direct:8,lbnl:9,lead:2,leav:8,length:2,less:8,let:[2,9],level:8,liabil:9,liabl:9,librari:[0,9],like:[3,8,9],limit:[8,9],line:[8,9],linear:4,link:[2,9],list:[2,3,5,6,8,9],list_of_actions_taken:[2,5,6,7,8],list_of_error:[2,5,6,7,8],load:[2,8],load_class:4,log1:5,log_fil:2,longer:1,look:8,lpead:8,lrf_comm:8,lrf_commut:8,lrfcommutatorhandl:8,lstop:8,lwave:8,machinefil:9,made:1,magmom:8,mai:[1,2,8,9],main:[4,9],major:[1,9],make:[2,3,8],manag:[2,9],mani:[1,8,9],master:[4,7,8],match:8,materi:9,matrix:8,max:[7,8],max_cor:7,max_drift:8,max_error:[1,2,8,9],max_errors_per_handl:2,max_errors_per_job:2,max_force_threshold:8,max_iter:7,max_molecule_perturb_scal:7,max_num_correct:2,max_step:[4,8],maxcorrectionserror:2,maxcorrectionsperhandlererror:2,maxcorrectionsperjoberror:2,maxforceerrorhandl:8,maximum:[2,7,8],mdalgo:8,mean:[2,3,5,7,8,9],meant:9,measur:[2,5,6,7,8],mechan:[1,2,9],memori:8,merchant:9,merg:9,mesh:8,meshsymmetryerrorhandl:[8,9],meshsymmetryhandl:2,messag:[1,2,6,8],metagga:8,metagga_opt_run:8,method:[1,2,5,6,7,8,9],michael:9,might:8,min:8,minima:7,minimum:8,minor:[1,9],minut:2,misc:1,miscellan:1,miss:8,mit:9,mitsuhiko:0,mod:[3,4],modder:[3,5,8],moddermodif:[5,8],mode:[1,2,3,4,5,8,9],modif:[3,9],modifi:[3,5,8,9],modify_object:3,modul:[9,10],mol:[6,7],molecul:7,molecule_perturb_scal:7,mongo:3,monitor:[1,2,5,6,7,8],monitor_freq:2,monti:[1,2],more:[1,2,8,9],most:[0,9],mostli:3,move:[1,2,3],mpi:7,mpirun:[8,9],mpnonscfset:8,msonabl:2,much:[1,2],multi:[1,8],multimod:7,must:[1,2,3,8],n_applied_correct:2,name:[2,4,5,6,7,8,9],natoms_large_cel:8,nearing:8,neb:8,neb_std_err:8,neb_vasp:8,necessari:[1,6,8,9],necessarili:8,need:[1,2,5,6,8,9],neg:[7,8],negative_freq_vec:7,nelect:1,nest:3,new_file_nam:3,next:8,ngx:8,ngy:8,ngz:8,nice:2,nicht:8,nicht_konv:8,nionic_step:8,njob:9,nkpt:8,nois:8,non:[1,2,3,5,7,8],nonconvergingerrorhandl:8,none:[2,3,5,6,7,8,9],noninfring:9,nonrecoverableerror:2,normal:[1,8],nose:9,notat:3,note:[2,3,8],notic:[2,9],now:[1,9],npar:[1,8],npt:8,nsw:9,number:[1,2,7,8,9],numer:8,nwchem:[1,2,4,9,10],nwchem_cmd:6,nwchemerrorhandl:6,nwchemjob:6,nwout:6,obj:3,object:[2,3,5,8,9],obtain:9,obvious:9,occur:[2,7,8],off:1,offici:9,often:[8,9],old_coord:7,older:9,onc:[1,2,8],one:[0,2,8,9],ong:[1,9],onli:[1,2,3,5,6,8],open:9,openmp:7,oper:8,opt:2,opt_with_frequency_flatten:7,optim:[1,7,8],option:[1,2,6],order:[2,9],org:9,orig:[5,6,7,8],orthogon:8,oszicar:8,other:[1,2,8,9],otherwis:[2,8,9],out:[0,5,6,8,9],out_of_memori:8,outcar:8,outlin:9,output:[1,2,5,6,7,8,9],output_fil:[5,6,7,8],output_filenam:[5,6,8],output_vasprun:8,outsid:2,over:[2,7],overrid:[6,8],overridden:2,overview:9,owner:3,packag:[1,9,10],page:0,parallel:[2,7,8],param:[2,8,9],paramet:[2,3,5,6,7,8,9],particular:[1,2,8,9],particularli:[1,9],partit:2,pass:[2,5,8,9],passthrough:[7,8],path:[0,2,3,8,9],pathnam:3,pbs_nodefil:9,pbs_walltim:8,pbswalltimehand:1,pbswalltimehandl:1,per:[1,2,8],perform:[1,2,3,4,5,6,7,8,9],permiss:9,permit:9,person:9,persson:9,perturb:7,perturb_coordin:7,ping:[1,9],pip:9,place:3,pleas:[6,9],plugin:9,point:8,point_group:8,poll:[2,8],polling_time_step:2,pop:[3,8],popen:[2,5,7,8],portion:9,poscar:[2,8,9],poscarerrorhandl:9,posit:[7,8],positiveenergyerrorhandl:8,posmap:8,possibl:[2,9],post:[1,2,7,8],postprocess:[2,5,6,7,8,9],potcar:8,potenti:[2,9],potim:8,potimerrorhandl:8,pre:[2,7,8],preced:3,precis:1,precondit:8,prefer:3,prefix:[2,5],present:[6,8,9],prevent:8,pricel:[1,8],print:3,print_exampl:4,prior:7,prioriti:2,probabl:8,problem:8,process:[2,7,8],product:[1,8],progress:[1,8],project:[0,9],proper:8,properli:[1,8],properti:[2,9],provid:[1,2,8,9],pssyevx:8,publish:9,pull:3,pull_al:3,purpos:[8,9],push:3,push_al:3,put:[0,9],pvasp:8,py3k:1,pymatgen:[1,3,6,8,9],pymatpro:3,pypi:9,python:[1,2,9],qchem:[1,2,9,10],qchem_command:7,qchemerrorhandl:7,qchemscferrorhandl:7,qcjob:7,qcjob_kwarg:7,qclog:7,qclog_fil:7,qcscratch:7,qin:7,qout:7,queue:2,quick:8,quickli:2,rais:[2,3,5,8],raise_on_max:2,raises_runtime_error:[2,8],random:9,rang:9,rate:9,rather:8,rca_dii:7,rca_gdm_thresh:7,reach:[2,8],read:8,real:9,real_opt:8,real_optlai:8,reason:8,recalcul:7,recommend:[1,8,9],record:[7,8],recov:9,recoveri:9,redirect:[6,7,8],refactor:1,refer:3,regular:8,reitz:0,rel:9,relat:[0,2,5,6,7,8],relax1:[2,8,9],relax2:[2,9],relax:[1,8,9],releas:[1,9],reli:8,remain:[2,8],renam:[3,5,6,8],repars:[5,8],repo:9,repositori:0,request:[1,2],requir:[1,2],rerun:[2,9],research:9,reset:2,restart:[2,8,9],restor:1,restrict:9,resubmit:1,result:[2,7,8],returncodeerror:2,reversed_direct:7,rewrit:[5,8],rhosyg:8,richard:[1,9],right:9,robust:[1,2,8,9],root:2,rot_mat:1,rot_matrix:8,rotat:8,routin:8,rpa:8,rspher:8,rudimentari:1,run:[1,2,4,5,6,7,8,9],run_interrupt:2,run_nwchem:[1,2,10],run_vasp:[1,2,10],runtim:2,runtimeerror:[1,2],sai:[2,8],same:9,sampl:[2,9],satisfi:8,save:[2,7],save_nam:7,save_scratch:7,sbesselit:8,scale:[7,9],scf:[5,7],scf_max_cycl:7,scheme:[7,8],scienc:9,scratch:[1,2,7],scratch_dir:[1,2,7,9],scratch_link:2,script:[1,4,9],search:1,sec:[2,8],second:[2,8],see:[3,5,7,8,9],self:9,sell:9,sensic:8,sensit:8,sent:2,separ:1,sequenc:[1,2,3,5,8,9],seri:[2,5,8,9],serializ:[2,5,6,7,8],seriou:8,server:9,set:[1,2,3,5,6,7,8,9],settings_overrid:[2,6,8,9],setup:[1,2,5,6,7,8,9],sever:9,sge:8,shall:9,shift:[1,8],shm:7,should:[1,2,3,5,6,7,8,9],shreya:9,shyam:1,shyue:[1,9],signal:2,signific:[1,8],significantli:1,similarli:9,simpl:[1,2],simpli:[2,3,5,8,9],simplifi:8,simul:[3,9],simultan:8,sinc:8,singl:[1,2],situat:[8,9],skip:2,skip_over_error:2,slightli:8,slow:8,slurm:8,small:[0,8],smaller:8,softwar:9,some:[1,2,7,8,9],someth:8,sometim:[2,8],sort:2,sourc:[2,3,4,5,6,7,8,9],space:[1,2,8],spec:2,special:[3,8],specif:[1,2,9],specifi:[1,2,8,9],speed:[1,8],speedup:8,sphinx:9,split:9,spuriou:1,sqrt:[1,8],stabl:1,standard:[0,5,6,7,8],star:8,start:[1,2,7,8,9],static3:9,std_err:8,std_feff_err:5,stderr:8,stderr_fil:[5,8],stderrhandl:8,stdout:[6,8],step:[1,2,8],steve:1,stop:[2,8],stopcar:8,stoppedrunhandl:8,store:[2,8],str:[2,3,5,6,7,8],strain:8,strict:[3,5,8],string:[2,3,7],structur:[2,7,8],style:[1,6,8],sub:[1,8,9],subclass:[2,9],subdir:8,subject:9,sublicens:9,submodul:[0,10],subpackag:10,subprocess:[5,7,8],subroutin:8,subsequ:8,subset:[1,8],subspac:8,subspacematrix:8,substanti:9,success:[1,2],suffici:[8,9],suffix:[2,7,8,9],sum:9,summar:9,supercomput:1,suppli:[3,5,8,9],support:[1,2,3,5,8],sure:8,symbol:2,symmetri:[1,8],symprec:8,syntax:3,sys:0,system:[1,2,4,8,9],take:[3,9],taken:[2,5,6,7,8],tar:[2,5],target:[4,9],task:[1,2],tempfil:2,temporari:2,tend:9,tensil:8,term:9,termin:[1,2,8,9],terminate_func:2,terminate_on_nonzero_returncod:2,test:[6,9],tet:8,tetirr:8,tetrahedron:8,than:[7,8],thei:9,theme:0,thermostat:8,thi:[0,1,2,3,4,5,6,7,8,9],those:9,though:9,thousand:9,thre:8,three:9,threshold:[7,8],through:[2,9],throughput:9,time:[1,2,8,9],timeout:8,tmp:[2,9],to_averag:8,todo:6,toler:8,too:[1,8],too_few_band:8,tool:9,tort:9,total:[2,8,9],transfer:9,transpar:1,treat:8,tri:[1,2],tripl:[1,8],triple_product:8,tune:8,tupl:2,turn:1,two:[8,9],txt:[5,8],type:[1,2,8,9],typic:8,unabl:8,unconverg:[1,5],unconvergederrorhandl:[5,8,9],under:9,underscor:3,unfix:[2,5,6,7,8],unfortun:8,uniform:9,uniqu:2,unit:9,unittest:9,univers:3,unlik:[5,8],unrecover:2,unrecoverable_error:1,unset:3,unsupport:[3,5,8],until:[7,8],updat:[1,8],upon:[2,8],use:[0,2,3,5,6,8,9],used:[0,1,5,6,8],useful:[1,2,8,9],user:2,uses:[0,1,2,9],using:[1,2,3,8,9],usual:[2,3,8],util:[1,10],valid:[1,2,9,10],validationerror:2,valu:[8,9],valueerror:[3,5,8],variabl:[1,8,9],variou:4,variuo:4,vasp:[1,2,4,9,10],vasp_cmd:[2,8,9],vasp_command:4,vasp_job_kwarg:8,vasperrorhandl:[1,2,8,9],vaspfilesvalid:8,vaspinput:8,vaspinput_kei:8,vaspjob:[1,2,8,9],vaspmodd:8,vaspnebjob:8,vaspnptmdvalid:8,vasprun:8,vasprunxmlvalid:[2,8,9],vastli:1,vector:8,veri:[0,8,9],version:8,versu:8,via:[2,8,9],vibrat:7,vienna:9,vincent:9,vldr:[2,9],vol:8,vol_change_tol:8,wai:[1,2,9],wait:[1,2],wall:[1,8],wall_tim:8,walltim:[1,8],walltimehandl:[1,8],want:[2,8],warn:8,waroqui:1,warranti:9,wavecar:8,wavefunct:8,well:[1,9],what:[3,8],whatev:[5,8],when:[1,2,5,6,7,8,9],where:[1,2,6,8,9],whether:[1,2,3,5,6,7,8,9],which:[1,2,3,5,6,8,9],whom:9,wildcard:2,william:9,wish:8,without:[3,5,8,9],work:[1,2,8,9],workflow:[2,9],world:[3,9],wors:8,would:[8,9],wouldn:8,wrap:8,wrapper:9,write:[8,9],written:[8,9],xiaohui:1,xml:8,xrang:9,yaml:[1,2],yet:6,yield:2,you:[0,2,8,9],your:[0,8,9],zbrent:[1,8],zero:[1,2],zheev:8,zhegv:8,zpotrf:8},titles:["krTheme Sphinx Style","Change Log","custodian package","custodian.ansible package","custodian.cli package","custodian.feff package","custodian.nwchem package","custodian.qchem package","custodian.vasp package","Custodian","custodian"],titleterms:{action:3,ansibl:3,api:9,calcul:9,chang:[1,9],cite:9,cli:4,content:[2,3,4,5,6,7,8],control:9,converge_geometri:4,converge_kpoint:4,cstdn:[4,9],custodian:[2,3,4,5,6,7,8,9,10],depend:9,development:9,doc:9,electron:9,exampl:9,feff:5,get:9,handler:[5,6,7,8],how:9,interpret:[3,5,8],job:[5,6,7,8,9],krtheme:0,licens:9,log:[1,9],modul:[2,3,4,5,6,7,8],nwchem:6,option:9,packag:[2,3,4,5,6,7,8],practic:9,qchem:7,refer:9,requir:9,run_nwchem:4,run_vasp:4,simpl:9,spec:9,sphinx:0,stabl:9,structur:9,style:0,submodul:[2,3,4,5,6,7,8],subpackag:[2,3,5,6,7,8],usag:9,util:2,v2017:9,valid:8,vasp:8,version:[1,9],yaml:9}})