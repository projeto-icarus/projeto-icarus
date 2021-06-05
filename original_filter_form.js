return (
  <form name="filter" method="get">
    <div className="sort ">
      <span className="pagination-summary">
        <i className="far fa-sort" /> Classificar por:
      </span>
      <div>
        <div className="filter_order_by_widget content-filter-widget">
          <div id="filter_order_by" data-filter="order_by">
            <div className="filter_order_by_setting filter-setting custom-control custom-radio ">
              <input
                type="radio"
                id="filter_order_by_0"
                name="filter[order_by]"
                required="required"
                className="custom-control-input"
                defaultValue="popular"
                defaultChecked="checked"
              />
              <label
                className="custom-control-label required"
                htmlFor="filter_order_by_0"
              >
                Popularidade
              </label>
            </div>
            <div className="filter_order_by_setting filter-setting custom-control custom-radio ">
              <input
                type="radio"
                id="filter_order_by_1"
                name="filter[order_by]"
                required="required"
                className="custom-control-input"
                defaultValue="date"
              />
              <label
                className="custom-control-label required"
                htmlFor="filter_order_by_1"
              >
                Data
              </label>
            </div>
            <div className="filter_order_by_setting filter-setting custom-control custom-radio ">
              <input
                type="radio"
                id="filter_order_by_2"
                name="filter[order_by]"
                required="required"
                className="custom-control-input"
                defaultValue="duration"
              />
              <label
                className="custom-control-label required"
                htmlFor="filter_order_by_2"
              >
                Duração
              </label>
            </div>
            <div className="filter_order_by_setting filter-setting custom-control custom-radio ">
              <input
                type="radio"
                id="filter_order_by_3"
                name="filter[order_by]"
                required="required"
                className="custom-control-input"
                defaultValue="rating"
              />
              <label
                className="custom-control-label required"
                htmlFor="filter_order_by_3"
              >
                Classificação
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="menu-3"
      className="filter-offcanvas offcanvas offcanvas-effect-3 offcanvas-right right"
    >
      <div id="content-filter" className="filter_container filter">
        <div className="filter-button-container">
          <span className="pagination-summary">
            <i className="fas fa-filter" /> Filtrar por:
          </span>
          <div className="content-filter-block">
            <h4 className="content-filter-header">
              <i className="published far fa-calendar fa-fw" /> Data adicionada
            </h4>
            <div className="dropdown filter-dropdown content-filter-container">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdown-filter_published"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-flip="false"
              >
                <span
                  className="filter_published_header content-filter-header menu-button"
                  data-menu="filter_published"
                >
                  Data adicionada
                </span>
              </button>
              <button
                type="button"
                className="btn btn-warning filter-reset-published content-filter-reset-button"
              >
                redefinir
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdown-filter_published"
              >
                <div
                  className="filter_published_widget content-filter-widget"
                  data-menu="filter_published"
                >
                  <div id="filter_published" data-filter="published">
                    <div>
                      {" "}
                      <div id="filter_published_min">
                        <div className="filter_published_min_setting filter-setting custom-control custom-radio ">
                          <input
                            type="radio"
                            id="filter_published_min_0"
                            name="filter[published][min]"
                            required="required"
                            className="custom-control-input"
                            defaultValue="1D"
                          />
                          <label
                            className="custom-control-label required"
                            htmlFor="filter_published_min_0"
                          >
                            Últimas 24 horas
                          </label>
                        </div>
                        <div className="filter_published_min_setting filter-setting custom-control custom-radio ">
                          <input
                            type="radio"
                            id="filter_published_min_1"
                            name="filter[published][min]"
                            required="required"
                            className="custom-control-input"
                            defaultValue="2D"
                          />
                          <label
                            className="custom-control-label required"
                            htmlFor="filter_published_min_1"
                          >
                            Últimos 2 dias
                          </label>
                        </div>
                        <div className="filter_published_min_setting filter-setting custom-control custom-radio ">
                          <input
                            type="radio"
                            id="filter_published_min_2"
                            name="filter[published][min]"
                            required="required"
                            className="custom-control-input"
                            defaultValue="7D"
                          />
                          <label
                            className="custom-control-label required"
                            htmlFor="filter_published_min_2"
                          >
                            Última semana
                          </label>
                        </div>
                        <div className="filter_published_min_setting filter-setting custom-control custom-radio ">
                          <input
                            type="radio"
                            id="filter_published_min_3"
                            name="filter[published][min]"
                            required="required"
                            className="custom-control-input"
                            defaultValue="1M"
                          />
                          <label
                            className="custom-control-label required"
                            htmlFor="filter_published_min_3"
                          >
                            Último mês
                          </label>
                        </div>
                        <div className="filter_published_min_setting filter-setting custom-control custom-radio ">
                          <input
                            type="radio"
                            id="filter_published_min_4"
                            name="filter[published][min]"
                            required="required"
                            className="custom-control-input"
                            defaultValue="3M"
                          />
                          <label
                            className="custom-control-label required"
                            htmlFor="filter_published_min_4"
                          >
                            Últimos 3 meses
                          </label>
                        </div>
                        <div className="filter_published_min_setting filter-setting custom-control custom-radio ">
                          <input
                            type="radio"
                            id="filter_published_min_5"
                            name="filter[published][min]"
                            required="required"
                            className="custom-control-input"
                            defaultValue="1Y"
                          />
                          <label
                            className="custom-control-label required"
                            htmlFor="filter_published_min_5"
                          >
                            Último ano
                          </label>
                        </div>
                        <div className="filter_published_min_setting filter-setting custom-control custom-radio ">
                          <input
                            type="radio"
                            id="filter_published_min_6"
                            name="filter[published][min]"
                            required="required"
                            className="custom-control-input"
                            defaultValue
                            defaultChecked="checked"
                          />
                          <label
                            className="custom-control-label required"
                            htmlFor="filter_published_min_6"
                          >
                            Todos
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-filter-block">
            <h4 className="content-filter-header">
              <i className="duration far fa-clock fa-fw" /> Duração
            </h4>
            <div className="filter_duration_container content-filter-container dropdown filter-dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdown-filter_duration"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-flip="false"
              >
                <span
                  className="filter_duration_header content-filter-header"
                  data-menu="filter_duration"
                >
                  Duração
                </span>
              </button>
              <button
                type="button"
                className="btn btn-warning filter-reset-duration content-filter-reset-button"
              >
                redefinir
              </button>
              <div
                className="dropdown-menu dropdown-menu-right filter_duration-dropdown"
                aria-labelledby="dropdown-filter_duration"
              >
                <div
                  className="filter_duration_widget content-filter-widget"
                  data-menu="filter_duration"
                >
                  <div
                    id="filter_duration"
                    data-values="[0,60,180,300,600,1200,1800]"
                    data-filter="duration"
                    className="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                  >
                    <input
                      type="hidden"
                      id="filter_duration_min"
                      name="filter[duration][min]"
                      defaultValue={0}
                    />
                    <input
                      id="filter_duration_max"
                      name="filter[duration][max]"
                      defaultValue={1800}
                    />
                    <div className="noUi-base">
                      <div className="noUi-connects">
                        <div
                          className="noUi-connect"
                          style={{
                            transform: "translate(0%, 0px) scale(1, 1)",
                          }}
                        />
                      </div>
                      <div
                        className="noUi-origin"
                        style={{
                          transform: "translate(-1000%, 0px)",
                          zIndex: 5,
                        }}
                      >
                        <div
                          className="noUi-handle noUi-handle-lower"
                          data-handle={0}
                          tabIndex={0}
                          role="slider"
                          aria-orientation="horizontal"
                          aria-valuemin={0.0}
                          aria-valuemax={1800.0}
                          aria-valuenow={0.0}
                          aria-valuetext={0}
                        >
                          <div className="noUi-touch-area" />
                        </div>
                      </div>
                      <div
                        className="noUi-origin"
                        style={{ transform: "translate(0%, 0px)", zIndex: 4 }}
                      >
                        <div
                          className="noUi-handle noUi-handle-upper"
                          data-handle={1}
                          tabIndex={0}
                          role="slider"
                          aria-orientation="horizontal"
                          aria-valuemin={0.0}
                          aria-valuemax={1800.0}
                          aria-valuenow={1800.0}
                          aria-valuetext={1800}
                        >
                          <div className="noUi-touch-area" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="noUi-pips noUi-pips-horizontal">
                    <span
                      className="duration-filter noUi-value noUi-value-horizontal"
                      style={{ left: "0%" }}
                    >
                      0
                    </span>
                    <span
                      className="duration-filter noUi-value noUi-value-horizontal"
                      style={{ left: "16.666666666667%" }}
                    >
                      1
                    </span>
                    <span
                      className="duration-filter noUi-value noUi-value-horizontal"
                      style={{ left: "33.333333333333%" }}
                    >
                      3
                    </span>
                    <span
                      className="duration-filter noUi-value noUi-value-horizontal"
                      style={{ left: "50%" }}
                    >
                      5
                    </span>
                    <span
                      className="duration-filter noUi-value noUi-value-horizontal"
                      style={{ left: "66.666666666667%" }}
                    >
                      10
                    </span>
                    <span
                      className="duration-filter noUi-value noUi-value-horizontal"
                      style={{ left: "83.333333333333%" }}
                    >
                      20
                    </span>
                    <span
                      className="duration-filter noUi-value noUi-value-horizontal"
                      style={{ left: "100%" }}
                    >
                      30+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-filter-block">
            <h4 className="content-filter-header">
              <i className="quality far fa-camera-movie fa-fw" /> Qualidade
            </h4>
            <div className="dropdown filter-dropdown content-filter-container">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdown-filter_quality"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-flip="false"
              >
                <span
                  className="filter_quality_header content-filter-header menu-button"
                  data-menu="filter_quality"
                >
                  Qualidade
                </span>
              </button>
              <button
                type="button"
                className="btn btn-warning filter-reset-quality content-filter-reset-button"
              >
                redefinir
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdown-filter_quality"
              >
                <div className="filter_quality_widget content-filter-widget">
                  <div id="filter_quality" data-filter="quality">
                    <div className="filter_quality_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_quality_0"
                        name="filter[quality]"
                        required="required"
                        className="custom-control-input"
                        defaultValue
                        defaultChecked="checked"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_quality_0"
                      >
                        Todos
                      </label>
                    </div>
                    <div className="filter_quality_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_quality_1"
                        name="filter[quality]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="hd"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_quality_1"
                      >
                        HD
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-filter-block">
            <h4 className="content-filter-header">
              <i className="vr far fa-vr-cardboard fa-fw" /> VR
            </h4>
            <div className="dropdown filter-dropdown content-filter-container">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdown-filter_virtual_reality"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-flip="false"
              >
                <span
                  className="filter_virtual_reality_header content-filter-header menu-button"
                  data-menu="filter_virtual_reality"
                >
                  VR
                </span>
              </button>
              <button
                type="button"
                className="btn btn-warning filter-reset-vr content-filter-reset-button"
              >
                redefinir
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdown-filter_virtual_reality"
              >
                <div className="filter_virtual_reality_widget content-filter-widget">
                  <div
                    id="filter_virtual_reality"
                    data-filter="virtual_reality"
                  >
                    <div className="filter_virtual_reality_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_virtual_reality_0"
                        name="filter[virtual_reality]"
                        required="required"
                        className="custom-control-input"
                        defaultValue
                        defaultChecked="checked"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_virtual_reality_0"
                      >
                        Todos
                      </label>
                    </div>
                    <div className="filter_virtual_reality_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_virtual_reality_1"
                        name="filter[virtual_reality]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="vr-device-needed"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_virtual_reality_1"
                      >
                        VR
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-filter-block">
            <h4 className="content-filter-header">
              <i className="advertiser_site fas fa-list-alt fa-fw" /> Fonte
            </h4>
            <div className="filter_advertiser_site_container dropdown filter-dropdown content-filter-container">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdown-filter_advertiser_site"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-flip="false"
              >
                <span
                  className="filter_advertiser_site_header content-filter-header menu-button"
                  data-menu="filter_advertiser_site"
                >
                  Fonte
                </span>
              </button>
              <button
                type="button"
                className="btn btn-warning filter-reset-source content-filter-reset-button"
              >
                redefinir
              </button>
              <div
                className="dropdown-menu dropdown-menu-right scrollable-menu"
                aria-labelledby="dropdown-filter_advertiser_site"
              >
                <div
                  className="filter_advertiser_site_widget content-filter-widget "
                  data-placeholder="Filtrar por Fonte"
                >
                  <input
                    type="search"
                    className="filter-search-field-advertiser_site form-control"
                    placeholder="Filtrar por Fonte"
                  />
                  <div
                    id="filter_advertiser_site"
                    data-filter="advertiser_site"
                  >
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_0"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue
                        defaultChecked="checked"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_0"
                      >
                        Todos
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_1"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="12milf"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_1"
                      >
                        12Milf
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_2"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="3movs"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_2"
                      >
                        3Movs
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_3"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="3prn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_3"
                      >
                        3PRN
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_4"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="4kporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_4"
                      >
                        4KPorn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_5"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="4tube"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_5"
                      >
                        4tube
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_6"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="alotporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_6"
                      >
                        ALOTPorn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_7"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="alphaporno"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_7"
                      >
                        AlphaPorno
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_8"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="alsscan"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_8"
                      >
                        ALSScan
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_9"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="amateur8"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_9"
                      >
                        Amateur8
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_10"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="anysex"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_10"
                      >
                        AnySex
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_11"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="babestare"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_11"
                      >
                        BabeStare
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_12"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="babestube"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_12"
                      >
                        BabesTube
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_13"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="badoinkvr"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_13"
                      >
                        BaDoinkVR
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_14"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="bang"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_14"
                      >
                        Bang
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_15"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="bdsm-one"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_15"
                      >
                        BDSM.one
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_16"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="bellesa"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_16"
                      >
                        Bellesa
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_17"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="bigtitslust"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_17"
                      >
                        BigTitsLust
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_18"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="bravoteens"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_18"
                      >
                        BravoTeens
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_19"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="bravotube"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_19"
                      >
                        BravoTube
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_20"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="cartoonporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_20"
                      >
                        CartoonPorn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_21"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="chubbyporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_21"
                      >
                        ChubbyPorn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_22"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="colmax"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_22"
                      >
                        Colmax
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_23"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="crazyporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_23"
                      >
                        CrazyPorn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_24"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="crockotube"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_24"
                      >
                        CrockoTube
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_25"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="crocotube"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_25"
                      >
                        CrocoTube
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_26"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="deviants"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_26"
                      >
                        Deviants
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_27"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="dorcelclub"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_27"
                      >
                        DorcelClub
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_28"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="dorcelnetwork"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_28"
                      >
                        DorcelNetwork
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_29"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="dorcelvision"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_29"
                      >
                        DorcelVision
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_30"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="drtuber"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_30"
                      >
                        DrTuber
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_31"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="ebony8"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_31"
                      >
                        Ebony8
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_32"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="ebonyo"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_32"
                      >
                        Ebonyo
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_33"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="eporner"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_33"
                      >
                        Eporner
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_34"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="eroticbeauties"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_34"
                      >
                        EroticBeauties
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_35"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="erroticaarchives"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_35"
                      >
                        ErroticaArchives
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_36"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="fantasti-cc"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_36"
                      >
                        Fantasti.cc
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_37"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="fapality"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_37"
                      >
                        Fapality
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_38"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="faphouse"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_38"
                      >
                        FapHouse
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_39"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="fapnado"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_39"
                      >
                        Fapnado
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_40"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="fapster"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_40"
                      >
                        Fapster
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_41"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="feetporno"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_41"
                      >
                        FeetPorno
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_42"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="fetishpapa"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_42"
                      >
                        Fetishpapa
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_43"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="fetishshrine"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_43"
                      >
                        FetishShrine
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_44"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="firstclasspov"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_44"
                      >
                        FirstClassPOV
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_45"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="freehardcore"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_45"
                      >
                        FreeHardcore
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_46"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="freeporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_46"
                      >
                        FreePorn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_47"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="freeporn8"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_47"
                      >
                        FreePorn8
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_48"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="frprn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_48"
                      >
                        Frprn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_49"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="germangoogirls"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_49"
                      >
                        GermanGooGirls
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_50"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="gettubetv"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_50"
                      >
                        GetTubeTV
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_51"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="gotporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_51"
                      >
                        GotPorn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_52"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="hd21"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_52"
                      >
                        HD21
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_53"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="hdtube"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_53"
                      >
                        HDtube
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_54"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="hdzog"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_54"
                      >
                        HDZog
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_55"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="hellporno"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_55"
                      >
                        HellPorno
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_56"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="hoes-tube"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_56"
                      >
                        Hoes.tube
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_57"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="holaporno"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_57"
                      >
                        HolaPorno
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_58"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="iceporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_58"
                      >
                        IcePorn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_59"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="interracial"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_59"
                      >
                        Interracial
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_60"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="iporntoo"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_60"
                      >
                        IPornToo
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_61"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="jacquie-michelelite"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_61"
                      >
                        Jacquie&amp;MichelElite
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_62"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="jacquie-micheltv"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_62"
                      >
                        Jacquie&amp;MichelTV
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_63"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="jizz"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_63"
                      >
                        Jizz
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_64"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="katestube"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_64"
                      >
                        Katestube
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_65"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="laidhub"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_65"
                      >
                        Laidhub
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_66"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="lesbian8"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_66"
                      >
                        Lesbian8
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_67"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="love4porn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_67"
                      >
                        Love4Porn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_68"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="madsex"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_68"
                      >
                        MadSex
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_69"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="maturetubehere"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_69"
                      >
                        MatureTubeHere
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_70"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="megatube"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_70"
                      >
                        MegaTube
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_71"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="metart"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_71"
                      >
                        MetArt
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_72"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="metartx"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_72"
                      >
                        MetArtX
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_73"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="milffox"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_73"
                      >
                        MilfFox
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_74"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="models-xxx"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_74"
                      >
                        Models.xxx
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_75"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="momvids"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_75"
                      >
                        MomVids
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_76"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="motherporno"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_76"
                      >
                        MotherPorno
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_77"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="mrluckypov"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_77"
                      >
                        MrLuckyPOV
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_78"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="mylust"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_78"
                      >
                        MyLust
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_79"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="mypornadvisor"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_79"
                      >
                        MyPornAdvisor
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_80"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="mypornsniffer"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_80"
                      >
                        MyPornSniffer
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_81"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="nuvid"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_81"
                      >
                        Nuvid
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_82"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="ok-xxx"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_82"
                      >
                        OK.XXX
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_83"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="onlineporno"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_83"
                      >
                        OnlinePorno
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_84"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="perfectgirls"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_84"
                      >
                        PerfectGirls
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_85"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pervclips"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_85"
                      >
                        Pervclips
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_86"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pinflix"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_86"
                      >
                        PinFlix
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_87"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="porndictator"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_87"
                      >
                        PornDictator
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_88"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="porndr"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_88"
                      >
                        PornDR
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_89"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="porner-tv"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_89"
                      >
                        Porner.TV
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_90"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornerbros"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_90"
                      >
                        PornerBros
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_91"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornestro"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_91"
                      >
                        Pornestro
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_92"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornhat"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_92"
                      >
                        PornHat
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_93"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornhd"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_93"
                      >
                        PornHD
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_94"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornhdprime"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_94"
                      >
                        PornHDPrime
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_95"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornhub"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_95"
                      >
                        Pornhub
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_96"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornicom"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_96"
                      >
                        Pornicom
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_97"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornid"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_97"
                      >
                        PornID
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_98"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornlib"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_98"
                      >
                        PornLib
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_99"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornmaki"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_99"
                      >
                        PornMaki
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_100"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornomovies"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_100"
                      >
                        PornoMovies
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_101"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornone"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_101"
                      >
                        PornOne
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_102"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornoxo"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_102"
                      >
                        PornoXO
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_103"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornpapa"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_103"
                      >
                        PornPapa
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_104"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornrabbit"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_104"
                      >
                        PornRabbit
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_105"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornrox"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_105"
                      >
                        PornRox
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_106"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="porntop"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_106"
                      >
                        PornTop
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_107"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="porntube"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_107"
                      >
                        PornTube
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_108"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornwatchers"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_108"
                      >
                        PornWatchers
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_109"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornwhite"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_109"
                      >
                        Pornwhite
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_110"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="pornxs"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_110"
                      >
                        Pornxs
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_111"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="proporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_111"
                      >
                        ProPorn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_112"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="rat-xxx"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_112"
                      >
                        Rat.XXX
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_113"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="rawattack"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_113"
                      >
                        RawAttack
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_114"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="recordedcams"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_114"
                      >
                        RecordedCams
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_115"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="seemysex"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_115"
                      >
                        SeeMySex
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_116"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="sex3"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_116"
                      >
                        Sex3
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_117"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="sexart"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_117"
                      >
                        SexArt
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_118"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="sextubefun"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_118"
                      >
                        SexTubeFun
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_119"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="sexvid"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_119"
                      >
                        SexVid
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_120"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="skyprivate"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_120"
                      >
                        Skyprivate
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_121"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="sleazyneasy"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_121"
                      >
                        SleazyNEasy
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_122"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="sortporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_122"
                      >
                        SortPorn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_123"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="spicyflix"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_123"
                      >
                        SpicyFlix
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_124"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="spizoo"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_124"
                      >
                        Spizoo
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_125"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="squirters"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_125"
                      >
                        Squirters
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_126"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="stileproject"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_126"
                      >
                        StileProject
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_127"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="stunning18"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_127"
                      >
                        Stunning18
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_128"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="submityourflicks"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_128"
                      >
                        SubmitYourFlicks
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_129"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="sunporno"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_129"
                      >
                        Sunporno
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_130"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="tatbabes"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_130"
                      >
                        TatBabes
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_131"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="thelifeerotic"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_131"
                      >
                        TheLifeErotic
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_132"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="theyarehuge"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_132"
                      >
                        TheyAreHuge
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_133"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="tryboobs"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_133"
                      >
                        TryBoobs
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_134"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="tube-bunny"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_134"
                      >
                        Tube-Bunny
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_135"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="tubeon"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_135"
                      >
                        TubeOn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_136"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="tubepornclassic"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_136"
                      >
                        TubePornClassic
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_137"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="tubewolf"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_137"
                      >
                        TubeWolf
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_138"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="tubous"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_138"
                      >
                        Tubous
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_139"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="txxx"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_139"
                      >
                        TXXX
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_140"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="tyjam"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_140"
                      >
                        Tyjam
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_141"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="uiporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_141"
                      >
                        uiPorn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_142"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="vikiporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_142"
                      >
                        VikiPorn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_143"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="viptube"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_143"
                      >
                        VipTube
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_144"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="vivatube"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_144"
                      >
                        VivaTube
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_145"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="vivthomas"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_145"
                      >
                        VivThomas
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_146"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="vjav"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_146"
                      >
                        VJav
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_147"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="voyeurhouse"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_147"
                      >
                        VoyeurHouse
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_148"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="vrporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_148"
                      >
                        VRPorn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_149"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="vrsumo"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_149"
                      >
                        VRSumo
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_150"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="vxxx"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_150"
                      >
                        VXXX
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_151"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="wankoz"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_151"
                      >
                        Wankoz
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_152"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="winporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_152"
                      >
                        WinPorn
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_153"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="xbabe"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_153"
                      >
                        XBabe
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_154"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="xcafe"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_154"
                      >
                        XCafe
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_155"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="xcum"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_155"
                      >
                        xCum
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_156"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="xhamster"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_156"
                      >
                        xHamster
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_157"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="xtits"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_157"
                      >
                        Xtits
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_158"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="xvideos"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_158"
                      >
                        XVideos
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_159"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="xvideosred"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_159"
                      >
                        XVideosRed
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_160"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="xxxreal"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_160"
                      >
                        XXXReal
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_161"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="yeptube"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_161"
                      >
                        YepTube
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_162"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="yesvids"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_162"
                      >
                        Yesvids
                      </label>
                    </div>
                    <div className="filter_advertiser_site_setting filter-setting custom-control custom-radio ">
                      <input
                        type="radio"
                        id="filter_advertiser_site_163"
                        name="filter[advertiser_site]"
                        required="required"
                        className="custom-control-input"
                        defaultValue="zbporn"
                      />
                      <label
                        className="custom-control-label required"
                        htmlFor="filter_advertiser_site_163"
                      >
                        ZBPorn
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary submit-button-form"
        type="submit"
        value="Submit"
      >
        Aplicar filtros
      </button>
    </div>
    <div>
      <div id="filter_tag_list">
        <input
          type="hidden"
          id="filter_tag_list_orientation"
          name="filter[tag_list][orientation]"
          defaultValue="straight"
        />
        <input
          type="hidden"
          id="filter_tag_list_pricing"
          name="filter[tag_list][pricing]"
        />
      </div>
    </div>
  </form>
);
